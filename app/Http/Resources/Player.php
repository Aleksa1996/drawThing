<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Player extends Resource
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
            'fd' => $this->fd
        ];
    }
}
