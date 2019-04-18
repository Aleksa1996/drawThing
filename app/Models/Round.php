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

    public $_finishing_at = null;

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
        return $this->belongsToMany('App\Models\Player')->withPivot('id', 'guessed', 'points', 'player_id')->as('score')->orderBy('points', 'desc');
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
        return empty($this->started_at) ? null : $this->started_at->diffInSeconds($this->_finishing_at);
    }

    /**
     * Calculate difference in percent
     *
     * @param \Carbon\Carbon $startDate
     * @param \Carbon\Carbon $finishDate
     * @return int
     */
    public function diffBetweenStartingAndFinishingInPercent($startDate = null, $finishDate = null)
    {
        if (empty($startDate)) {
            $startDate = $this->started_at;
        }

        if (empty($finishDate)) {
            $startDate = $this->finishing_at;
        }

        $now = Carbon::now();

        $diffStartFinish = $startDate->diffInSeconds($finishDate);
        $diffNowStart = $now->diffInSeconds($startDate);

        return $diffNowStart / ($diffStartFinish == 0 ? 1 : $diffStartFinish) * 100;
    }

    /**
     * Format difference in minute between starting and finishing time
     *
     * @return string
     */
    public function timer()
    {
        return empty($this->started_at) ? '00:00' : $this->started_at->diffAsCarbonInterval($this->_finishing_at)->format('%I:%S');
    }

    /**
     * Refreshing model
     *
     * @return \Carbon\Carbon
     */
    public function tick()
    {
        $this->refresh();
        $this->_finishing_at = $this->_finishing_at->subSecond();
    }

    /**
     * Starting round (changing status, associating with word etc...)
     *
     * @param Word $word
     * @return void
     */
    public function start(Word $word, int $round_length)
    {
        $this->status = 'in_progress';
        $this->started_at = Carbon::now();
        $this->finishing_at = $this->started_at->copy()->addSeconds($round_length);
        $this->_finishing_at = $this->finishing_at->copy();

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
        return $this->status == 'finished' || $this->diffBetweenStartingAndFinishingInSec() == 0 || $this->whetherAllPlayersGuessedWord() || !$this->game->room->hasEnoughPlayersForGame();
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

        $distance = levenshtein(trim(strtolower($input)), trim(strtolower($wordObj->word)));

        if ($distance == 0) {
            return self::GUESSED;
        }

        if ($distance <= 2) {
            return self::WAS_CLOSE;
        }

        return 0;
    }

    /**
     * Award player who draws
     *
     * @return bool
     */
    public function awardDrawer()
    {
        $avgPoints = $this->players()->wherePivot('player_id', '<>', $this->player->id)->avg('points');
        $sumPoints = round((mt_rand(0, 9) / 10) * $avgPoints);

        if ($sumPoints <= 0) {
            $sumPoints = rand(1, 3);
        }

        return $this->players()->updateExistingPivot($this->player->id, ['points' => $sumPoints]);
    }

    /**
     * Determine if all players has guessed word in round
     *
     * @return bool
     */
    public function whetherAllPlayersGuessedWord()
    {
        return $this->players()->active()->wherePivot('guessed', false)->wherePivot('player_id', '<>', $this->drawn_by)->count() == 0;
    }

    // scopes
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['starting', 'in_progress']);
    }
}
