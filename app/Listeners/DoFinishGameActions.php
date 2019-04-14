<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Events\GameFinished;

use SwooleTW\Http\Websocket\Facades\Websocket;

use App\Http\Resources\Game as GameResource;
use App\Http\Resources\Round as RoundResource;


class DoFinishGameActions
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  GameFinished  $event
     * @return void
     */
    public function handle(GameFinished $event)
    {
        $event->game->finish();
        $room = $event->game->room;

        $finishingGameData = [
            'isThereNextGame' => false,
            'rounds' => RoundResource::collection($event->game->getRounds()->load('players')),
            'game' => new GameResource($event->game)
        ];

        // if we have next game then we should create and start it
        if ($room->isThereNextGame()) {
            $event->game = $room->createGame();
            $randomPlayer = $room->getRandomPlayer();
            $round = $event->game->createRound($randomPlayer);

            $finishingGameData['isThereNextGame'] = true;
            $finishingGameData['nextGame'] = new GameResource($event->game);
            $finishingGameData['nextRound'] = new RoundResource($round);
        } else {
            $room->deactivate();
            $finishingGameData['finalScores'] = RoundResource::collection($room->getFinalScores());
        }
        // summary of the game through rounds and flag is there new game or not
        Websocket::to($room->uuid)->emit('FINISHING_GAME', $finishingGameData);
    }
}
