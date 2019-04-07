<?php

namespace App\Http\Controllers;

use Validator;

use App\Models\Game;
use App\Models\Room;
use App\Models\Round;
use App\Models\Word;
use App\Models\Player;

use Illuminate\Http\Request;

use App\Http\Resources\Room as RoomResource;
use App\Http\Resources\Game as GameResource;
use App\Http\Resources\Round as RoundResource;
use App\Http\Resources\Word as WordResoruce;
use App\Http\Resources\PlayerScore as PlayerScoreResource;


use Illuminate\Validation\ValidationException;
use SwooleTW\Http\Websocket\Facades\Websocket;
use App\Http\Resources\Player as PlayerResource;
use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;
use App\Custom\Tools;

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
                'message.text' => 'required|string|min:1',
                'game.id' => 'present|numeric|nullable',
                'game.status' => 'present|string|nullable'
            ]);

            if ($validator->fails()) {
                throw ValidationException::withMessages($validator->failed());
            }

            $player = $this->validatePlayer($data);

            // check if word is guessed through chat
            $result = $this->guessWord($websocket, $data, $player);

            if ($result['guessingResult'] === Round::GUESSED) {
                $websocket->to($data['room']['uuid'])->emit('PLAYER_GUESSED_WORD', ['player' => $result['data']]);
            } else {
                if ($result['guessingResult'] === Round::WAS_CLOSE) {
                    $websocket->emit('PLAYER_WAS_CLOSE',  $result['data']);
                }
                // generate chat message
                $message = Tools::generateChatMessage($data['message']['text'], ['player_id' => $player->id]);
                $websocket->emit('SEND_MESSAGE_ROOM_SUCCESS', $message);
                $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_MESSAGE_ROOM', $message);
            }
        } catch (\Exception $e) {
            $this->emitException($websocket, 'SEND_MESSAGE_ROOM_FAILURE', $e);
        }
    }

    /**
     * Check if player has guessed word
     *
     * @param Player $player
     * @param array $data
     * @return void
     */
    protected function guessWord($websocket, array $data = null, Player $player)
    {
        try {
            if (empty($websocket) || empty($data)  || empty($player)  || empty($data['game']['id']) || empty($data['game']['status'])) {
                return ['guessingResult' => 0, 'data' => []];
            }

            $room = $player->currentRoom();
            if (empty($room)) {
                throw ValidationException::withMessages(['_general_error' => ['Room is not valid!']]);
            }

            $game = $room->currentGame();
            if (empty($game) || ($game->id != $data['game']['id'])) {
                throw ValidationException::withMessages(['_general_error' => ['Game is not valid!']]);
            }

            $round = $game->currentRound();
            if (empty($round)) {
                throw ValidationException::withMessages(['_general_error' => ['Round is not valid!']]);
            }

            if (!$player->hasGuessedWord($round)) {

                $guessingResult = $round->checkGuessingWord($data['message']['text']);

                if ($guessingResult === Round::GUESSED) {
                    $extraAwardInPercent = 0;
                    $diffInPercent = $round->diffBetweenStartingAndFinishingInPercent();

                    if ($diffInPercent <= 35) {
                        $extraAwardInPercent = 20;
                    } else if ($diffInPercent > 75) {
                        $extraAwardInPercent = -25;
                    }

                    $player->awardWithPoints($round, $round->word->points_worth, $extraAwardInPercent);
                    $player->loadScoreForRound($round);

                    return ['guessingResult' => $guessingResult, 'data' => new PlayerScoreResource($player)];
                    // $websocket->to($room->uuid)->emit('PLAYER_GUESSED_WORD', ['player' => new PlayerScoreResource($player)]);
                } else if ($guessingResult === Round::WAS_CLOSE) {
                    return ['guessingResult' => $guessingResult, 'data' => []];
                    // $websocket->emit('PLAYER_WAS_CLOSE', []);
                }
            }
            return ['guessingResult' => 0, 'data' => []];
        } catch (\Exception $e) {
            $this->emitException($websocket, 'PLAYER_GUESSED_WORD_FAILURE', $e);
        }
    }

    public function test()
    {
        // $player = Player::find(10);
        // $round = Round::find(7);
        // $game = Game::find(2);
        $room = Room::find(2);

        // $r = $room->games()->with('rounds.players')->get()->pluck('rounds.*')->flatten();
        // return $r;
        // return RoundResource::collection($r);
        $finishingGameData = [];
        $finishingGameData['finalScores'] = RoundResource::collection($room->getFinalScores());
        return json_encode($finishingGameData);
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

            if (empty($room) || !$room->isPlayerDrawing($player)) {
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
     * Returns words to player for choosing
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

            if (empty($room) || !$room->isPlayerDrawing($player)) {
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
            if (empty($room)) {
                throw ValidationException::withMessages(['_general_error' => ['Room is not valid!']]);
            }

            $game = $room->currentGame();
            if (empty($game)) {
                throw ValidationException::withMessages(['_general_error' => ['Game is not valid!']]);
            }

            $round = $game->currentRound();
            if (empty($round)) {
                throw ValidationException::withMessages(['_general_error' => ['Round is not valid!']]);
            }

            $word = Word::find($data['word']['id']);

            $websocket->emit('PLAYER_CHOOSED_WORD', ['word' => new WordResoruce($word)]);
            // mask the word and send it to all other players
            $word->word = Tools::maskWord($word->word);
            $websocket->broadcast()->to($room->uuid)->emit('PLAYER_CHOOSED_WORD', ['word' => new WordResoruce($word)]);

            // starting game
            $game->start();
            // starting round
            $round->start($word);
            $round->load('players');
            $websocket->to($room->uuid)->emit('STARTING_ROUND', ['round' => new RoundResource($round)]);

            // starting round timer
            $this->startTimer(1000, function () use (&$websocket, $room, $game, $round, $data) {

                $round->tick();
                unset($round->players);
                $websocket->to($room->uuid)->emit('TICK_ROUND', ['round' => new RoundResource($round)]);

                if ($round->finished()) {
                    $round->awardDrawer();
                    $round->finish();
                    $nextPlayer = $room->getRandomPlayer();

                    // there is no players in queue to play current game so we end game
                    if (empty($nextPlayer)) {
                        $game->finish();
                        $finishingGameData = [
                            'isThereNextGame' => false,
                            'rounds' => RoundResource::collection($game->getRounds()->load('players')),
                            'game' => new GameResource($game)
                        ];

                        // if we have next game then we should create and start it
                        if ($room->isThereNextGame()) {
                            $game = $room->createGame();
                            $randomPlayer = $room->getRandomPlayer();
                            $round = $game->createRound($randomPlayer);

                            $finishingGameData['isThereNextGame'] = true;
                            $finishingGameData['nextGame'] = new GameResource($game);
                            $finishingGameData['nextRound'] = new RoundResource($round);
                        } else {
                            $room->deactivate();
                            $finishingGameData['finalScores'] = RoundResource::collection($room->getFinalScores());
                        }
                        // summary of the game through rounds and flag is there new game or not
                        $websocket->to($room->uuid)->emit('FINISHING_GAME', $finishingGameData);
                        return $round->finished();
                    }

                    $round = $game->createRound($nextPlayer);
                    // TODO: SENDING FINAL SCORES AND DISPLAYING TABLE IN ROUND SUMMARY
                    $finishingRoundData = ['drawn_by' => $nextPlayer->id, 'rounds' => RoundResource::collection($game->getRounds()->load('players'))];
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
