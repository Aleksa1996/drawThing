<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

use App\Http\Resources\Score as ScoreResource;
use App\Http\Resources\Word as WordResource;


class Round extends Resource
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
            'number' => $this->number,
            'status' => $this->status,
            'word' => new WordResource($this->whenLoaded('word')),
            'drawn_by' => $this->drawn_by,
            'started_at' => $this->startedAtAtomFormat(),
            'finishing_at' => $this->finishingAtAtomFormat(),
            'timer' => $this->timer(),
            'seconds' => $this->diffBetweenStartingAndFinishingInSec(),
            'score' => ScoreResource::collection($this->whenLoaded('players'))
        ];
    }
}
