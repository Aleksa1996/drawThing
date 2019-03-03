<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    // options
    protected $fillable = ['number', 'number_of_rounds', 'current_round', 'room_id'];

    // relationships
    public function room()
    {
        return $this->belongsTo('App\Models\Room');
    }

    public function players()
    {
        return $this->belongsToMany('App\Models\Player');
    }

    public function rounds()
    {
        return $this->hasMany('App\Models\Round');
    }

    // mutators

    // accessors

    // methods
}
