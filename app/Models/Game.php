<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Game
 *
 * @property integer $id
 * @property integer $number
 * @property integer $number_of_rounds
 *
 * @property integer $current_round
 * @property integer $room_id
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
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

    /**
     * Get number of games that was played in room
     *
     * @return int
     */
    public function getRoundsCount()
    {
        return $this->rounds()->count();
    }

    /**
     * Getting all rounds
     *
     * @return Round[]
     */
    public function getRounds()
    {
        return $this->rounds()->get();
    }

    /**
     * Creating and starting new round
     *
     * @param Player $player
     * @param Word $word
     * @return Round
     */
    public function startNextRound(Player $player, Word $word)
    {
        $round = new Round();
        $round->number = (int)$this->getRoundsCount() + 1;
        $round->status = 'starting';
        $round->word_id = $word->id;
        $round->drawn_by = $player->id;

        return $this->rounds()->save($round);
    }

    public function createRound($player)
    {
        $round = new Round();
        $round->number = (int)$this->getRoundsCount() + 1;
        $round->status = 'starting';
        $round->drawn_by = $player->id;

        return $this->rounds()->save($round);
    }
    /**
     * Get current round in game
     *
     * @return Round
     */
    public function currentRound()
    {
        return $this->rounds()->active()->latest()->take(1)->first();
    }

    /**
     * Game can continiue if number of rounds is not exceeded
     *
     * @return boolean
     */
    public function canContinue()
    {
        return $this->number_of_rounds < $this->getRoundsCount();
    }

    public function finish()
    {
        $this->status = 'finished';
        return $this->save();
    }

    //scopes
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['starting', 'in_progress']);
    }
}
