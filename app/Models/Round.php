<?php

namespace App\Models;

use Illuminate\Support\Carbon;
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

    protected $dates = ['finishing_at', 'started_at'];

    // relationships
    public function word()
    {
        return $this->belongsTo('App\Models\Word');
    }

    public function game()
    {
        return $this->belongsTo('App\Models\Game');
    }

    public function player()
    {
        return $this->belongsTo('App\Models\Player', 'drawn_by');
    }

    // mutators

    // accessors

    // methods

    public function startedAtAtomFormat()
    {
        return empty($this->started_at) ? null : $this->started_at->toAtomString();
    }

    public function finishingAtAtomFormat()
    {
        return empty($this->finishing_at) ? null : $this->finishing_at->toAtomString();
    }

    public function diffBetweenStartingAndFinishingInSec()
    {
        return empty($this->started_at) ? null : $this->started_at->diffInSeconds($this->finishing_at);
    }

    public function timer()
    {
        return empty($this->started_at) ? null : $this->started_at->diffAsCarbonInterval($this->finishing_at)->format('%I:%S');
    }

    public function tick()
    {
        return $this->finishing_at = $this->finishing_at->subSecond();
    }

    public function start()
    {
        $this->started_at = Carbon::now();
        $this->finishing_at = $this->started_at->copy()->addMinute(1)->addSecond();
        return $this->save();
    }

    public function finished()
    {
        return $this->diffBetweenStartingAndFinishingInSec() == 0;
    }

    // scopes

    public function scopeActive($query)
    {
        return $query->whereIn('status', ['starting', 'in_progress']);
    }
}
