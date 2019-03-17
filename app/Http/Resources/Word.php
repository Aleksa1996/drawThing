<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Word extends Resource
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
            'word' => $this->word,
            'points_worth' => $this->points_worth,
            'type' => $this->type,
            'clength' => strlen($this->word)
        ];
    }
}
