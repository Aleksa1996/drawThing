<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Score as ScoreResource;


class PlayerScore extends Resource
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
            'username' => $this->username,
            'avatar' => $this->avatar,
            'fd' => $this->fd,
            'score' => $this->whenLoaded('rounds', function () {
                return  new ScoreResource($this->rounds->first());
            })
        ];
    }
}
