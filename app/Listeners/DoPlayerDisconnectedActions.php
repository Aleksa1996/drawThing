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

use App\Models\Room;
use App\Models\Player;


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

        // if player does not have room return immediately
        if (empty($room)) return;

        $this->disconnectFromRoom($event->player, $room);

        $this->handleRoomByPlayerCount($event->player, $room);


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

    public function handleRoomByPlayerCount(Player $player, Room $room)
    {
        $playerCount = $room->getActivePlayerCount();

        // if room is empty deactivate it
        if ($playerCount <= 0) {
            $room->deactivate();
        }

        // only if we have game in progress
        if ($room->hasGameInProgress()) {
            $game = $room->getCurrentGame();

            // if room has only one player immediately finish all games and rounds and display final scores
            if ($playerCount == 1) {
                // dispatch event to finish current game and round
                event(new GameFinished($game));
                // finish all active games and rounds
                $room->finishAllRounds();
                $room->finishAllGames();
            }

            if ($playerCount > 1) {
                $round  = $game->getCurrentRound();
                // if player that leaved room was drawing, immediately finish current round and try to start another
                if ($round->drawn_by == $player->id && ($round->status == 'starting' || $game->status == 'starting')) {
                    if ($game->finished()) {
                        event(new GameFinished($game));
                    } else {
                        event(new RoundFinished($round));
                    }
                }
            }
        }
    }
}
