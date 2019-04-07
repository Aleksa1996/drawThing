<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Score extends Resource
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
            'id' => $this->score->id,
            'guessed' => $this->score->guessed,
            'points' => $this->score->points,
            'player_id' => $this->score->player_id,
            'round_id' => $this->score->round_id,
        ];
    }
}
