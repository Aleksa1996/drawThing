<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

use App\Http\Resources\Game as GameResource;
use App\Http\Resources\Round as RoundResource;


class Room extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $has_game_in_progress = $this->hasGameInprogress();

        $currentGame = null;
        $currentRound = null;
        if ($has_game_in_progress) {
            $currentGame = $this->getCurrentGame();
            $currentRound = $currentGame->getCurrentRound();
        }

        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'active' => $this->active,
            'number_of_games' => $this->number_of_games,
            'round_length' => $this->round_length,

            'created_by' => $this->created_by,
            'administered_by' => $this->administered_by,

            'players' => Player::collection($this->whenLoaded('players')),

            'created_at' => $this->created_at,

            'has_game_in_progress' => $has_game_in_progress,
            'game' => $this->when(
                $has_game_in_progress,
                new GameResource($currentGame)
            ),
            'round' => $this->when(
                $has_game_in_progress,
                new RoundResource($currentRound)
            )
        ];
    }
}
