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
 * @property integer $created_by
 * @property integer $administered_by
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Room extends Model
{
    // options
    protected $fillable = ['uuid', 'active', 'number_of_games', 'created_by', 'administered_by'];

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
        return $this->players()->active()->count() <= 0;
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
        if (!is_array($except)) {
            $except = [$except];
        }
        $currentGame = $this->getCurrentGame();

        return $this->players()->active()
            ->whereNotIn('players.id', $except)
            ->whereDoesntHave('drawnInRounds', function ($query) use ($currentGame) {
                if (!empty($currentGame)) $query->where('game_id', $currentGame->id);
            })->inRandomOrder()->take(1)->first();
    }

    /**
     * Get number of active players in room
     *
     * @return int
     */
    public function getPlayerCount()
    {
        return $this->players()->count();
    }

    /**
     * Get number of active players in room
     *
     * @return int
     */
    public function getActivePlayerCount()
    {
        return $this->players()->active()->count();
    }

    /**
     * Checking if we have enough players to play game
     *
     * @return boolean
     */
    public function hasEnoughPlayersForGame()
    {
        return $this->getActivePlayerCount() > 1;
    }

    /**
     * Get number of games that were played in room
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
    public function createGame($status = 'starting')
    {
        $game = new Game();
        $game->number_of_rounds = $this->getActivePlayerCount();
        $game->status = $status;

        return $this->games()->save($game);
    }

    /**
     * Get the game in progress
     *
     * @return Game
     */
    public function getCurrentGame()
    {
        return $this->games()->active()->latest()->take(1)->first();
    }

    /**
     * Is player drawing in current round
     *
     * @param Player $player
     * @return boolean
     */
    public function isPlayerDrawing(Player $player)
    {
        if (!($game = $this->getCurrentGame())) return false;
        if (!($round = $game->getCurrentRound())) return false;

        return $round->drawn_by == $player->id;
    }

    /**
     * Checks if we can start new game in room
     *
     * @return boolean
     */
    public function isThereNextGame()
    {
        return $this->number_of_games > $this->getGamesCount() && $this->hasEnoughPlayersForGame();
    }

    /**
     * Get final scores in room, current game
     *
     * @return array
     */
    public function getFinalScores()
    {
        return $this->games()->with('rounds.players')->get()->pluck('rounds.*')->flatten();
    }

    /**
     * Set finish status on all games
     *
     * @return bool
     */
    public function finishAllGames()
    {
        $this->games()->update(['status' => 'finished']);
    }

    /**
     * Set finish status on all rounds
     *
     * @return bool
     */
    public function finishAllRounds()
    {
        foreach ($this->games as $game) {
            $game->rounds()->update(['status' => 'finished']);
        }
    }


    // scopes
    public function scopeFindByUuid($query, $uuid)
    {
        return $query->where('uuid', $uuid);
    }

    public function scopeActive($query)
    {
        return $query->where('rooms.active', true);
    }
}
