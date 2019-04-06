<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Room
 *
 * @property integer $id
 * @property integer $number
 * @property string $status

 * @property integer $game_id
 * @property integer $word_id
 * @property integer $drawn_by
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 *
 * @property \Carbon\Carbon $finishing_at
 * @property \Carbon\Carbon $started_at
 */
class Round extends Model
{

    // options
    protected $fillable = ['number', 'status', 'game_id', 'word_id', 'drawn_by'];

    protected $dates = ['finishing_at', 'started_at'];

    public const GUESSED = 1;
    public const WAS_CLOSE = 2;

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

    public function players()
    {
        return $this->belongsToMany('App\Models\Player')->withPivot('id', 'guessed', 'points', 'player_id')->as('score');
    }

    // mutators

    // accessors

    // methods

    /**
     * Get ATOM format for started_at column
     *
     * @return string
     */
    public function startedAtAtomFormat()
    {
        return empty($this->started_at) ? null : $this->started_at->toAtomString();
    }

    /**
     * Get ATOM format for finishing_at column
     *
     * @return string
     */
    public function finishingAtAtomFormat()
    {
        return empty($this->finishing_at) ? null : $this->finishing_at->toAtomString();
    }

    /**
     * Difference in seconds between starting and finishing time
     *
     * @return int|null
     */
    public function diffBetweenStartingAndFinishingInSec()
    {
        return empty($this->started_at) ? null : $this->started_at->diffInSeconds($this->finishing_at);
    }

    /**
     * Format difference in minute between starting and finishing time
     *
     * @return string
     */
    public function timer()
    {
        return empty($this->started_at) ? null : $this->started_at->diffAsCarbonInterval($this->finishing_at)->format('%I:%S');
    }

    /**
     * Substracts second from finishing_at
     *
     * @return \Carbon\Carbon
     */
    public function tick()
    {
        return $this->finishing_at = $this->finishing_at->subSecond();
    }

    /**
     * Starting round (changing status, associating with word etc...)
     *
     * @param Word $word
     * @return void
     */
    public function start(Word $word)
    {
        $this->status = 'in_progress';
        $this->started_at = Carbon::now();
        //TODO: VRATI NA MINUT POSLE TESTIRANJA
        // $this->finishing_at = $this->started_at->copy()->addMinute(1)->addSecond();
        $this->finishing_at = $this->started_at->copy()->addSecond(15);
        $this->word()->associate($word);

        $players = $this->game->room->players;
        $this->players()->attach($players->pluck('id'));

        return $this->save();
    }

    /**
     * Is round finished
     *
     * @return boolean
     */
    public function finished()
    {
        return $this->diffBetweenStartingAndFinishingInSec() == 0;
    }

    /**
     * Finishing round (changing status etc...)
     *
     * @return boolean
     */
    public function finish()
    {
        $this->status = 'finished';
        return $this->save();
    }

    /**
     * Checks guessing word by using levenshtein calculation function
     *
     * @param string $input
     * @return 1 | 2 | 0
     */
    public function checkGuessingWord(string $input)
    {
        $wordObj = $this->word;

        $distance = levenshtein(strtolower($input), $wordObj->word);

        if ($distance == 0) {
            return self::GUESSED;
        }

        if ($distance <= 2) {
            return self::WAS_CLOSE;
        }

        return 0;
    }

    // scopes
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['starting', 'in_progress']);
    }
}
