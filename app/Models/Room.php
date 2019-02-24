<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    //

    public function players()
    {
        return $this->hasManyThrough('App\Models\Player', 'App\Models\Game');
    }

    public function games()
    {
        return $this->hasMany('App\Models\Game');
    }
}
