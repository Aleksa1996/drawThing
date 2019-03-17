<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Validation\ValidationException;

use Illuminate\Http\Request;

use SwooleTW\Http\Websocket\Facades\Websocket;
use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;

use App\Models\Player;
use App\Models\Room;
use App\Models\Word;
use App\Models\Game;

use App\Http\Resources\Player as PlayerResource;
use App\Http\Resources\Room as RoomResource;
use App\Http\Resources\Word as WordResoruce;

class GameController extends WebsocketController
{
    /**
     * Recives and passes room messages
     *
     * @param Websocket $websocket
     * @param array $data
     * @return void
     */
    public function onRoomMessage($websocket, $data)
    {
        try {
            $validator = Validator::make($data, [
                'room.uuid' => 'required|string|min:1',
                'message.text' => 'required|string|min:1'
            ]);

            if ($validator->fails()) {
                throw ValidationException::withMessages($validator->failed());
            }

            $player = $this->validatePlayer($data);

            $message = [
                'message' => [
                    'id' => uniqid('message_' . $player->id, true),
                    'text' => $data['message']['text'],
                    'player_id' => $player->id
                ]
            ];

            $websocket->emit('SEND_MESSAGE_ROOM_SUCCESS', $message);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_MESSAGE_ROOM', $message);
        } catch (\Exception $e) {
            $this->emitException($websocket, 'SEND_MESSAGE_ROOM_FAILURE', $e);
        }
    }

    /**
     * Recives and passes game drawings
     *
     * @param Websocket $websocket
     * @param array $data
     * @return void
     */
    public function onDrawing($websocket, $data)
    {
        try {
            $validator = Validator::make($data, [
                'room.uuid' => 'required|string|min:1',
                'drawing.items' => 'present|array'
            ]);

            if ($validator->fails()) {
                throw ValidationException::withMessages($validator->failed());
            }

            $player = $this->validatePlayer($data);

            $drawing = [
                'drawing' => $data['drawing'],
                'player' => ['id' => $player->id]
            ];

            $websocket->emit('SEND_DRAWING_GAME_SUCCESS', $drawing);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_DRAWING_GAME', $drawing);
        } catch (\Exception $e) {
            $this->emitException($websocket, 'SEND_DRAWING_GAME_FAILURE', $e);
        }
    }

    /** TODO:
     * Starts the game
     *
     * @param Request $request
     * @return Response
     */
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

            $room = $player->currentRoom();
            if ($room->getPlayerCount() <= 1) {
                throw new \Exception('Cannot start game with one player in room!');
            }

            $randomPlayer = $room->getRandomPlayer([$player->id]);
            var_dump($randomPlayer->toArray());
            // sending notification that admin started game
            Websocket::broadcast()->to($data['room']['uuid'])->emit('STARTING_GAME_COUNTDOWN', ['drawn_by' => $player->id]);
            $game = [
                'game' => [
                    'words_to_choose' => WordResoruce::collection(Word::getWordsToChoose())
                ]
            ];
            // Websocket::emit();
            return response()->json(['STARTING_GAME_COUNTDOWN' => true], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }
}
