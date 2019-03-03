<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

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
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'active' => $this->active,
            'number_of_games' => $this->number_of_games,
            'current_game' => $this->current_game,

            'created_by' => $this->created_by,
            'administered_by' => $this->administered_by,

            'players' => Player::collection($this->whenLoaded('players')),

            'created_at' => $this->created_at
        ];
    }
}
