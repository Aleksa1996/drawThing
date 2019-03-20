<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Room
 *
 * @property integer $id
 * @property string $uuid
 * @property boolean $active
 * @property integer $number_of_games
 *
 * @property integer $current_game
 * @property integer $created_by
 * @property integer $administered_by
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Room extends Model
{
    // options
    protected $fillable = ['uuid', 'active', 'number_of_games', 'current_game', 'created_by', 'administered_by'];

    // relationships
    public function players()
    {
        return $this->belongsToMany('App\Models\Player')->withPivot('active');
    }

    public function games()
    {
        return $this->hasMany('App\Models\Game');
    }

    // mutators

    // accessors

    // methods

    /**
     * Creates new room record in database
     *
     * @param array $attributes
     * @return $this
     */
    public static function create(array $attributes)
    {
        $model = static::query()->create($attributes);
        $model->uuid =  uniqid('room_' . $model->id . '_', true);
        $model->save();

        return $model;
    }

    /**
     * Eager loads players relation
     *
     * @return $this
     */
    public function loadActivePlayers()
    {
        return $this->load(['players' => function ($query) {
            $query->where('player_room.active', true);
        }]);
    }

    /**
     * Choose one random player from room and set it as admin
     *
     * @return boolean
     */
    public function setNewAdmin()
    {
        $newAdminPlayer = $this->players()->wherePivot('active', true)->first();
        if (empty($newAdminPlayer)) return false;

        $this->administered_by = $newAdminPlayer->id;
        return $this->save() ? $newAdminPlayer : false;
    }

    /**
     * Checks if player username already exists in room
     *
     * @param string $username
     * @return boolean
     */
    public function isPlayerUsernameOccupied($username)
    {
        return $this->players()->where('players.username', trim($username))->count() >= 1;
    }

    /**
     * Is room empty
     *
     * @return boolean
     */
    public function isEmpty()
    {
        return $this->players()->wherePivot('active', true)->count() <= 0;
    }

    /**
     * Set room active flag to false
     *
     * @return boolean
     */
    public function deactivate()
    {
        $this->active = false;
        return $this->save();
    }

    /**
     * Get random player from room
     *
     * @param array $except set of player id's to exclude
     * @return \App\Models\Player|null
     */
    public function getRandomPlayer($except = [])
    {
        return $this->players()->active()->whereNotIn('players.id', $except)->inRandomOrder()->take(1)->first();
    }

    /**
     * Get number of active players in room
     *
     * @return int
     */
    public function getPlayerCount()
    {
        return $this->players()->active()->count();
    }

    /**
     * Get number of games that was played in room
     *
     * @return int
     */
    public function getGamesCount()
    {
        return $this->games()->count();
    }

    /**
     * Collect necessary data and create new game
     *
     * @return \App\Models\Game
     */
    public function createGame()
    {
        $game = new Game();
        $game->number = (int)$this->getGamesCount() + 1;
        $game->number_of_rounds = $this->getPlayerCount();
        $game->current_round = 1;

        return $this->games()->save($game);
    }

    // scopes
    public function scopeFindByUuid($query, $uuid)
    {
        return $query->where('uuid', $uuid);
    }

    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}
