<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = trim(preg_replace('/\s+/', ' ', strtolower($value)));
    }

    public function games()
    {
        return $this->hasMany('App\Models\Game');
    }

    // public function room(){
    //     return $this->hasManyThrough()('App\Models\Game');
    // }
}
