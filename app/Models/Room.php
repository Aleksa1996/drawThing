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
 * @property integer $current_game
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

    public function setNewAdmin()
    {
        $newAdminPlayer = $this->players()->wherePivot('active', true)->first();
        if (empty($newAdminPlayer)) return false;

        $this->administered_by = $newAdminPlayer->id;
        return $this->save() ? $newAdminPlayer : false;
    }

    public function IsPlayerUsernameOccupied($username)
    {
        return $this->players()->where('players.username', trim($username))->count() >= 1;
    }

    public function isEmpty()
    {
        return $this->players()->wherePivot('active', true)->count() <= 0;
    }

    public function deactivate()
    {
        $this->active = false;
        return $this->save();
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
