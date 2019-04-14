<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Game
 *
 * @property integer $id
 * @property integer $number_of_rounds
 * @property string $status
 * @property integer $room_id
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Game extends Model
{
    // options
    protected $fillable = ['number_of_rounds', 'status', 'room_id'];

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
     * Get number of games that were played in room
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
     * Creating bare round and associating it with a player
     *
     * @param Player $player
     * @return Round
     */
    public function createRound(Player $player)
    {
        $round = new Round();
        $round->number = (int)$this->getRoundsCount() + 1;
        $round->status = 'starting';

        $round->player()->associate($player);

        return $this->rounds()->save($round);
    }

    /**
     * Creating round and associating it with player and word
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

        $round->player()->associate($player);
        $round->word()->associate($word);

        return $this->rounds()->save($round);
    }

    /**
     * Get current round in game
     *
     * @return Round
     */
    public function getCurrentRound()
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
        return $this->number_of_rounds >= $this->getRoundsCount();
    }

    /**
     * Starting round (changing status etc...)
     *
     * @return boolean
     */
    public function start()
    {
        $this->status = 'in_progress';
        return $this->save();
    }

    /**
     * Finishing round (changing status etc..)
     *
     * @return boolean
     */
    public function finish()
    {
        $this->status = 'finished';
        return $this->save();
    }

    /**
     * Is game finished
     *
     * @return boolean
     */
    public function finished()
    {
        return $this->status == 'finished' || !$this->room->hasEnoughPlayersForGame() || $this->number_of_rounds == $this->getRoundsCount();
    }

    //scopes
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['starting', 'in_progress']);
    }
}
