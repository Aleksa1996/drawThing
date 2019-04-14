<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Events\RoundFinished;

use SwooleTW\Http\Websocket\Facades\Websocket;

use App\Http\Resources\Round as RoundResource;

use App\Events\GameFinished;

class DoFinishRoundActions
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
     * @param  RoundFinished  $event
     * @return void
     */
    public function handle(RoundFinished $event)
    {
        $event->round->awardDrawer();
        $event->round->finish();

        $game = $event->round->game;
        $room = $game->room;

        $nextPlayer = $room->getRandomPlayer();

        if (!empty($nextPlayer)) {
            $round = $game->createRound($nextPlayer);
            $finishingRoundData = ['drawn_by' => $nextPlayer->id, 'rounds' => RoundResource::collection($game->getRounds()->load('players'))];
            Websocket::to($room->uuid)->emit('FINISHING_ROUND', $finishingRoundData);
        } else {
            event(new GameFinished($game));
        }
    }
}
