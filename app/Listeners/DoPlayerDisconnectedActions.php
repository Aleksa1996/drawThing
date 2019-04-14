<?php

namespace App\Listeners;


use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Events\PlayerDisconnected;

use SwooleTW\Http\Websocket\Facades\Websocket;
use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;

use App\Http\Resources\Player as PlayerResource;

use App\Events\GameFinished;
use App\Events\RoundFinished;


class DoPlayerDisconnectedActions
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
     * @param  PlayerDisconnected  $event
     * @return void
     */
    public function handle(PlayerDisconnected $event)
    {
        // get room from wich player left
        $room = $event->player->getCurrentRoom();

        $this->disconnectFromRoom($event->player, $room);

        // if player does not have room return immediately
        if (empty($room)) return;

        // if room is empty deactivate it
        $playerCount = $room->getActivePlayerCount();
        if ($playerCount <= 0) {
            $room->deactivate();
        }

        $game = $room->getCurrentGame();

        // if room has only one player immediately finish all games and rounds and display final scores
        if ($playerCount == 1) {
            // finish all active games and rounds
            $room->finishAllRounds();
            $room->finishAllGames();
            // dispatch event to finish current game and round
            event(new GameFinished($game));
        }

        // okej mi je kada je round ticker u toku
        // nije okej kada leave-uje u sred biranja reci

        if ($playerCount > 1) {
            $round  = $game->getCurrentRound();
            // if player that leaved room was drawing, immediately finish current round and try to start another
            if ($round->drawn_by == $event->player->id) {
                if ($game->finished()) {
                    event(new GameFinished($game));
                } else {
                    event(new RoundFinished($round));
                }
            }
        }

        // if player was admin, replace him with another player in room
        if ($event->player->isAdminInRoom($room) && $newAdminPlayer = $room->setNewAdmin()) {
            Websocket::broadcast()->to($room->uuid)->emit('REPLACE_ADMIN_ROOM', ['player' => new PlayerResource($newAdminPlayer)]);
        }

        // send notification to others
        Websocket::broadcast()->to($room->uuid)->emit('PLAYER_LEAVED_ROOM', ['player' => new PlayerResource($event->player)]);
    }

    /**
     * Disconnect player from db and websocket tables
     *
     * @param Player $player
     * @param Room $room
     *
     * @return void
     */
    public function disconnectFromRoom($player, $room)
    {
        $player->disconnectFromRoom($room);
        $player->load('rooms');
        foreach ($player->rooms as $r) {
            WebsocketRoom::delete($player->fd, $r->uuid);
        }
    }
}
