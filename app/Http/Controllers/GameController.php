<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Game;

use App\Models\Room;

use App\Models\Word;
use App\Models\Player;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

use App\Http\Resources\Room as RoomResource;
use App\Http\Resources\Game as GameResource;
use App\Http\Resources\Round as RoundResource;
use App\Http\Resources\Word as WordResoruce;


use Illuminate\Validation\ValidationException;
use SwooleTW\Http\Websocket\Facades\Websocket;
use App\Http\Resources\Player as PlayerResource;
use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;

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

            // TODO: CHECK MESSAGE WHEN GAME IS IN PROGRESS AND ADD POINTS TO PLAYER IF HE GUESSED

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
            $room = $player->currentRoom();

            if (!$room->isPlayerDrawing($player)) {
                throw ValidationException::withMessages(['_general_error' => ['You dont have permissions to do that!']]);
            }

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

            $player = $this->validatePlayer($data);
            $room = $player->currentRoom();

            if (!$room->isPlayerDrawing($player)) {
                throw ValidationException::withMessages(['_general_error' => ['You dont have permissions to do that!']]);
            }

            $words_to_choose = ['words_to_choose' => WordResoruce::collection(Word::getWordsToChoose($room))];

            $websocket->broadcast()->to($data['room']['uuid'])->emit('PLAYER_CHOOSING_WORD', []);
            $websocket->emit('CHOOSE_WORD', ['round' => $words_to_choose]);
        } catch (\Exception $e) {
            $this->emitException($websocket, 'REQUEST_WORDS_FAILURE', $e);
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

            $player = $this->validatePlayer($data);
            $room = $player->currentRoom();

            $game = $room->currentGame();
            $word = Word::find($data['word']['id']);
            $round = null;

            if (empty($game)) {
                var_dump('game empty');
                $game = $room->createGame();
                $round = $game->startNextRound($player, $word);
            } elseif (!$game->canContinue()) {
                // TODO: ZAVRSITI I RUNDU
                var_dump('game cannot continiue');
                $game->finish();
                $game = $room->createGame();
                $round = $game->startNextRound($player, $word);
            } else {
                $round = $game->currentRound();
            }


            $websocket->emit('PLAYER_CHOOSED_WORD', ['word' => new WordResoruce($word)]);
            // mask the word and send it to all other players
            $word->word = str_repeat('_', $word->clength);
            $websocket->broadcast()->to($room->uuid)->emit('PLAYER_CHOOSED_WORD', ['word' => new WordResoruce($word)]);

            // starting game
            $game->start();
            // starting round
            $round->start($word);
            $websocket->to($room->uuid)->emit('STARTING_ROUND', ['round' => new RoundResource($round)]);

            // starting round timer
            $this->startTimer(1000, function () use (&$websocket, $room, $game, $round, $data) {

                $round->tick();
                $websocket->to($room->uuid)->emit('TICK_ROUND', ['round' => new RoundResource($round)]);

                if ($round->finished()) {
                    $round->finish();
                    $nextPlayer = $room->getRandomPlayer();

                    // there is no players in queue to play current game so we end game
                    if ($nextPlayer == null) {
                        //TODO: game finished not round because we dont have next player : ALL PLAYER WERE DRAWING
                        $game->finish();

                        $finishingGameData = ['isThereNextGame' => false, 'rounds' => RoundResource::collection($game->getRounds())];

                        // if we have next game then we should create and start it
                        if ($room->isThereNextGame()) {
                            $game = $room->createGame();
                            $randomPlayer = $room->getRandomPlayer();
                            $round = $game->createRound($randomPlayer);

                            $finishingGameData['isThereNextGame'] = true;
                            $finishingGameData['game'] = new GameResource($game);
                            $finishingGameData['round'] = new RoundResource($round);
                        }
                        // summary of the game through rounds and flag is there new game or not
                        $websocket->to($room->uuid)->emit('FINISHING_GAME', $finishingGameData);

                        return $round->finished();
                    }

                    $round = $game->createRound($nextPlayer);
                    // TODO: SENDING FINAL SCORES AND DISPLAYING TABLE IN ROUND SUMMARY
                    $finishingRoundData = ['drawn_by' => $nextPlayer->id, 'rounds' => RoundResource::collection($game->getRounds())];
                    $websocket->to($room->uuid)->emit('FINISHING_ROUND', $finishingRoundData);
                }

                return $round->finished();
            });
        } catch (\Exception $e) {
            $this->emitException($websocket, 'CHOOSED_WORD_FAILURE', $e);
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
        $randomPlayer = $room->getRandomPlayer($player->id);
        $game = $room->createGame();
        $round = $game->createRound($randomPlayer);

        $startingGameData = ['game' => new GameResource($game), 'round' => new RoundResource($round)];

        // notify that admin is starting the game
        Websocket::broadcast()->to($data['room']['uuid'])->emit('STARTING_GAME',  $startingGameData);

        return response()->json(['STARTING_GAME' => true], 200);
    }
}
