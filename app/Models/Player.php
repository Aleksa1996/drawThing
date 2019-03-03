<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    // options
    protected $fillable = ['username', 'avatar', 'fd'];

    // relationships
    public function rooms()
    {
        return $this->belongsToMany('App\Models\Room')->withPivot('active');
    }

    public function games()
    {
        return $this->belongsToMany('App\Models\Game');
    }

    public function rounds()
    {
        return $this->belongsToMany('App\Models\Round');
    }

    // mutators
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = trim(preg_replace('/\s+/', '', strtolower($value)));
    }

    // accessors


    // methods
    public static function create(array $attributes)
    {
        $model = static::query()->create($attributes);
        $model->password =  $model->username . '_' .  $model->id;
        $model->save();

        return $model;
    }

    public function disconnectFromRoom($room = null)
    {
        if (is_null($room)) {
            $room = $this->currentRoom();
        }
        return $this->rooms()->updateExistingPivot($room->id, ['active' => false]);
    }

    public function currentRoom()
    {
        return $this->rooms()->latest()->first();
    }

    public function isAdminInRoom($roomUuid = null)
    {
        $room = null;
        if (is_null($roomUuid)) {
            $room = $this->currentRoom();
        } else {
            $room = $this->rooms()->where('uuid', $roomUuid)->first();
        }
        return $room && $room->administered_by == $this->id;
    }

    public static function checkIdentity(array $credentials)
    {
        return self::where([
            ['id', $credentials['id']],
            ['username', $credentials['username']],
            ['password', $credentials['password']]
        ])->first();
    }

    public static function findByFd($fd)
    {
        return self::active()->where('fd', $fd)->first();
    }

    // scopes
    public function scopeActive($query)
    {
        return $query->whereHas('rooms', function ($query) {
            $query->where('player_room.active', true);
        });
    }
}
