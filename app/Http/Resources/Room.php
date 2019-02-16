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
            'players' => Player::collection($this->whenLoaded('players')),
            'created_at' => $this->created_at
        ];
    }
}
