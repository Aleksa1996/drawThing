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

            //TODO: IS PLAYER DRAWING ?!?!?!?
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

    /**
     * Undocumented function
     *
     * @param Websocket $websocket
     * @param array $data
     * @return void
     */
    public function onRequestWordsToChoose($websocket, $data)
    {
        try {
            $validator = Validator::make($data, [
                'room.uuid' => 'required|string|min:1'
            ]);

            if ($validator->fails()) {
                throw ValidationException::withMessages($validator->failed());
            }

            //TODO: IS PLAYER DRAWING ?!?!?!?
            $player = $this->validatePlayer($data);

            $game = [
                'game' => [
                    'words_to_choose' => WordResoruce::collection(Word::getWordsToChoose())
                ]
            ];

            $websocket->broadcast()->to($data['room']['uuid'])->emit('PLAYER_CHOOSING_WORD', []);
            $websocket->emit('CHOOSE_WORD', $game);
        } catch (\Exception $e) {
            //TODO: CHANGE EVENT ON FAIL
            $this->emitException($websocket, 'SEND_DRAWING_GAME_FAILURE', $e);
        }
    }

    public function onChoosedWord($websocket, $data)
    {
        try {

            $validator = Validator::make($data, [
                'room.uuid' => 'required|string|min:1',
                'word.id' => 'required|numeric|exists:words,id'
            ]);

            if ($validator->fails()) {
                throw ValidationException::withMessages($validator->failed());
            }

            //TODO: IS PLAYER DRAWING ?!?!?!?
            $player = $this->validatePlayer($data);

            $room = $player->currentRoom();
            $game = $room->createGame();

            $websocket->emit('PLAYER_CHOOSED_WORD', ['word' => $data['word']]);

            // mask the word and send it to all other players
            $data['word']['word'] = str_repeat('_', $data['word']['clength']);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('PLAYER_CHOOSED_WORD', ['word' => $data['word']]);
            // create round
            // dispatch action
            $websocket->to($data['room']['uuid'])->emit('STARTING_ROUND', ['round' => '']);
        } catch (\Exception $e) {
            //TODO: CHANGE EVENT ON FAIL
            $this->emitException($websocket, 'SEND_DRAWING_GAME_FAILURE', $e);
        }
    }

    /**
     * Starts the game
     *
     * @param Request $request
     * @return Response
     */
    public function start(Request $request, Player $player)
    {
        $data = $request->validate([
            'room.uuid' => 'required|string|min:1'
        ]);

        // only admin can start game
        if (!$player->isAdminInRoom($data['room']['uuid'])) {
            throw ValidationException::withMessages(['_general_error' => ['You dont have permissions to do that!']]);
        }

        // room must have more than 1 player
        $room = $player->currentRoom();
        if ($room->getPlayerCount() <= 1) {
            throw ValidationException::withMessages(['_general_error' => ['Cannot start game with one player in room!']]);
        }

        // which player first draw ?
        $randomPlayer = $room->getRandomPlayer([$player->id]);

        // notify that admin started game
        Websocket::broadcast()->to($data['room']['uuid'])->emit('STARTING_GAME_COUNTDOWN', ['drawn_by' => $randomPlayer->id]);

        return response()->json(['STARTING_GAME_COUNTDOWN' => true], 200);
    }
}
