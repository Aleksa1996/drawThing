<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Room
 *
 * @property integer $id
 * @property integer $number

 * @property integer $game_id
 * @property integer $word_id
 * @property integer $drawn_by
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Round extends Model
{

    // options
    protected $fillable = ['number', 'game_id', 'word_id', 'drawn_by'];

    // relationships

    // mutators

    // accessors

    // methods

    // scopes
}
