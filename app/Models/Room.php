<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
    public static function create(array $attributes)
    {
        $model = static::query()->create($attributes);
        $model->uuid =  uniqid('room_' . $model->id . '_', true);
        $model->save();

        return $model;
    }

    public function loadActivePlayers()
    {
        return $this->load(['players' => function ($query) {
            $query->where('player_room.active', true);
        }]);
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
