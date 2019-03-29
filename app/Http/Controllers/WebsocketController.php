<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Validation\ValidationException;

use SwooleTW\Http\Websocket\Facades\Websocket;
use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;

use App\Models\Player;

use App\Http\Resources\Player as PlayerResource;

class WebsocketController extends Controller
{
    /**
     * On connection send fd to conneced user
     *
     * @param Websocket $websocket
     * @param string|array $data
     * @return void
     */
    public function onConnect($websocket, $data)
    {
        var_dump('connected');
        try {
            $websocket->emit('CONNECT_SOCKET_DATA', ['fd' => $websocket->getSender()]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }
    }
    /**
     * On disconnect do some actions
     *
     * @param Websocket $websocket
     * @param string|array $data
     * @return void
     */
    public function onDisconnect($websocket, $data)
    {
        var_dump('disconnected');
        try {
            // find player
            $player = Player::findByFd($websocket->getSender());

            if (is_null($player)) {
                return;
            }

            // get room from wich player left
            $room = $player->currentRoom();

            // disconnect player from db  and websocket tables
            $player->disconnectFromRoom($room);
            WebsocketRoom::delete($player->fd, $room->uuid);

            // if room is empty remove it // TODO: SPECIAL RANDOM ROOM DONT DELETE
            if ($room->isEmpty()) {
                $room->deactivate();
            }

            // if player was admin, replace him with another in room
            if ($player->isAdminInRoom($room) && $newAdminPlayer = $room->setNewAdmin()) {
                Websocket::broadcast()->to($room->uuid)->emit('REPLACE_ADMIN_ROOM', ['player' => new PlayerResource($newAdminPlayer)]);
            }

            // send notification to others
            Websocket::broadcast()->to($room->uuid)->emit('PLAYER_LEAVED_ROOM', ['player' => new PlayerResource($player)]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }
    }

    /**
     * Validate player by id,username and password
     *
     * @param array $data
     * @return Player
     */
    protected function validatePlayer($data)
    {
        $validator = Validator::make($data, [
            'player.id' => 'required|numeric|min:1',
            'player.username' => 'required|exists:players,username',
            'player.password' => 'required'
        ]);

        if ($validator->fails()) {
            throw ValidationException::withMessages($validator->failed());
        }

        // authenticating player
        $player = Player::checkIdentity($data['player']);

        if (is_null($player)) {
            throw ValidationException::withMessages(['_general_error' => ['Wrong credentials!']]);
        }

        return $player;
    }

    /**
     *
     * Emit error message to websocket
     *
     * @param Websocket $websocket
     * @param string $event
     * @param \Exception $e
     * @return void
     */
    protected function emitException($websocket, string $event, \Exception $exception)
    {
        if ($exception instanceof ValidationException) {

            // prepare errors
            $errorCollection = collect($exception->errors());
            $errorCollection = $errorCollection->map(function ($error, $key) {
                if ($key == '_general_error') return ['field' => '', 'message' => $error];
                return ['field' => $key, 'message' => $error[0]];
            });

            // emit error
            $websocket->emit($event, ['errors' => $errorCollection->values()]);
        } else {
            var_dump($exception->getMessage());
            var_dump($exception->getLine());
            var_dump($exception->getTrace());
        }
    }

    /**
     * Start swoole ticking timer
     *
     * @param int $delay in ms
     * @param callable $callback
     * @return int $timer_id
     */
    protected function startTimer(int $delay, callable $callback)
    {
        return swoole_timer_tick($delay, function ($timerid) use ($callback) {
            if ($callback()) {
                swoole_timer_clear($timerid);
            }
        });
    }
}
