<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Score extends Resource
{
    protected $addData = [];
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->score->id,
            'guessed' => $this->score->guessed,
            'score' => $this->score->score
        ];

        return array_merge($data, $this->addData);
    }

    public function append(array $data)
    {
        $this->addData = $data;
        return $this;
    }
}
