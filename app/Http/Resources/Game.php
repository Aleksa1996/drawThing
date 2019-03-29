<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Game extends Resource
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
            'status' => $this->status,
            'number_of_rounds' => $this->number_of_rounds,
            'room_id' => $this->room_id,
            'created_at' => $this->created_at,
            'rounds' => Round::collection($this->whenLoaded('rounds')),
        ];
    }
}
