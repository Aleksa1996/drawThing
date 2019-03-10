<?php

namespace App\Http\Controllers;

use Validator;

use App\Models\Game;
use App\Models\Room;
use App\Models\Player;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Resources\Player as PlayerResource;
use App\Http\Resources\Room as RoomResource;

use SwooleTW\Http\Websocket\Facades\Websocket;

use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;


class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function onConnect_ws($websocket, $data)
    {
        var_dump('connected');
        try {
            // send fd to fresh connection
            $websocket->emit('CONNECT_SOCKET_DATA', ['fd' => $websocket->getSender()]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }
    }

    public function onDisconnect_ws($websocket, $data)
    {
        var_dump('disconnected');
        try {
            // find player that disconnected
            $player = Player::findByFd($websocket->getSender());

            if (is_null($player)) {
                return;
            }

            // get the room from wich player left
            $room = $player->currentRoom();
            // disconnect player db and websocket tables
            $player->disconnectFromRoom($room);
            WebsocketRoom::delete($player->fd, $room->uuid);
            // if room is empty remove it TODO: SPECIAL RANDOM ROOM DONT DELETE
            if ($room->isEmpty()) {
                $room->deactivate();
            }
            // if player was admin, replace him with another player
            if ($player->isAdminInRoom($room) && $newAdminPlayer = $room->setNewAdmin()) {
                Websocket::broadcast()->to($room->uuid)->emit('REPLACE_ADMIN_ROOM', ['player' => new PlayerResource($newAdminPlayer)]);
            }

            // send notification to others
            Websocket::broadcast()->to($room->uuid)->emit('PLAYER_LEAVED_ROOM', ['player' => new PlayerResource($player)]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }
    }

    public function sendMessageRoom_ws($websocket, $data)
    {
        try {
            // validate recived data
            $validator = Validator::make($data, [
                'player.id' => 'required|numeric|min:1',
                'player.username' => 'required|exists:players,username',
                'player.password' => 'required',
                'room.uuid' => 'required|string|min:1',
                'message.text' => 'required|string|min:1'
            ]);

            if ($validator->fails()) {
                throw new \Exception('You are sending wrong data!');
            }

            $message = [
                'message' => [
                    'id' => uniqid('message_', true),
                    'text' => $data['message']['text'],
                    'player_id' => $data['player']['id']
                ]
            ];
            // pass message from one player to others in same room
            $websocket->emit('SEND_MESSAGE_ROOM_SUCCESS', $message);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_MESSAGE_ROOM', $message);
        } catch (\Exception $e) {
            $websocket->emit('SEND_MESSAGE_ROOM_FAILURE', [
                'message' => $e->getMessage()
            ]);
        }
    }

    public function start(Request $request)
    {
        $data = $request->validate([
            'player.id' => 'required|numeric|min:1',
            'player.username' => 'required|exists:players,username',
            'player.password' => 'required',
            'room.uuid' => 'required|string|min:1'
        ]);

        try {
            $player = Player::checkIdentity($data['player']);

            // if player who tries to start game exists
            if (is_null($player)) {
                throw new \Exception('Wrong credentials!');
            }

            // if player is admin
            if (!$player->isAdminInRoom($data['room']['uuid'])) {
                throw new \Exception('You dont have permissions to do that!');
            }

            // sending notification that admin started game
            Websocket::broadcast()->to($data['room']['uuid'])->emit('GAME_STARTED', []);

            return response()->json(['game' => []], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }

    public function sendDrawing_ws($websocket, $data)
    {
        try {
            // validate recived data
            $validator = Validator::make($data, [
                'player.id' => 'required|numeric|min:1',
                'player.username' => 'required|exists:players,username',
                'player.password' => 'required',
                'room.uuid' => 'required|string|min:1',
                'drawing.items' => 'present|array'
            ]);

            if ($validator->fails()) {
                throw new \Exception('You are sending wrong data!');
            }

            $drawing = [
                'drawing' => $data['drawing'],
                'player' => ['id' => $data['player']['id']]
            ];
            // pass drawing from one player to others in same room
            // $websocket->emit('SEND_DRAWING_GAME_SUCCESS', $drawing);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_DRAWING', $drawing);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
            $websocket->emit('SEND_DRAWING_GAME_FAILURE', [
                'message' => $e->getMessage()
            ]);
        }
    }
}
