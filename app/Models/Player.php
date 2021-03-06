<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\Player
 *
 * @property integer $id
 * @property string $username
 * @property string $password
 * @property string $avatar
 * @property integer $fd
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
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

    public function drawnInRounds()
    {
        return $this->hasMany('App\Models\Round', 'drawn_by');
    }

    public function rounds()
    {
        return $this->belongsToMany('App\Models\Round')->withPivot('id', 'guessed', 'points', 'round_id')->as('score');
    }

    // mutators

    /**
     * Cleaning and generating password value before storing it in database
     *
     * @param string $value
     * @return void
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = trim(preg_replace('/\s+/', '', strtolower($value)));
    }

    // accessors


    // methods

    /**
     * Creates record in database
     *
     * @param array $attributes
     * @return $this
     */
    public static function create(array $attributes)
    {
        $model = static::query()->create($attributes);
        $model->password =  $model->username . '_' .  $model->id;
        $model->save();

        return $model;
    }

    /**
     * Disconnects player from the room (changing status of active to false)
     *
     * @param \App\Models\Room $room
     * @return int
     */
    public function disconnectFromRoom($room = null)
    {
        if (empty($room)) {
            $room = $this->getCurrentRoom();
        }

        if (empty($room)) {
            return $this->rooms()->newPivotStatement()->where('player_id', $this->id)->update(['active' => false]);
        }

        return $this->rooms()->updateExistingPivot($room->id, ['active' => false]);
    }

    /**
     * Gets the current room of player
     *
     * @return \App\Models\Room
     */
    public function getCurrentRoom()
    {
        return $this->rooms()->active()->latest()->take(1)->first();
    }

    /**
     * Is player admin in current room
     *
     * @param string $roomUuid
     * @return boolean
     */
    public function isAdminInRoom($room = null)
    {
        $r = null;
        if ($room instanceof \App\Models\Room) {
            return $room && $room->administered_by == $this->id;
        } else if (empty($room)) {
            $r = $this->getCurrentRoom();
        } else if (is_string($room)) {
            $r = $this->rooms()->where('uuid', $room)->first();
        }
        return $r && $r->administered_by == $this->id;
    }

    /**
     * Authenticating player
     *
     * @param array $credentials
     *      $credentials = [
     *          'id' => (string)
     *          'username' => (string)
     *          'password' => (string)
     *      ]
     * @return \App\Models\Player
     */
    public static function checkIdentity(array $credentials)
    {
        return self::where([
            ['id', $credentials['id']],
            ['username', $credentials['username']],
            ['password', $credentials['password']]
        ])->first();
    }

    /**
     * Doing necessary updates to handle this type of problem
     *
     * @return boolean
     */
    public function handleUsernameOccupied()
    {
        $this->username .= $this->id;
        $this->password = $this->username . '_' .  $this->id;
        return $this->save();
    }

    /**
     * Finds player by file descriptor
     *
     * @param int $fd
     * @return $this
     */
    public static function findByFd(int $fd)
    {
        return self::active()->where('fd', $fd)->first();
    }

    /**
     * Load relationship to get scores for specific round
     *
     * @param Round $round
     * @return void
     */
    public function loadScoreForRound(Round $round)
    {
        return $this->load(['rounds' => function ($query) use ($round) {
            return $query->where('rounds.id', $round->id);
        }]);
    }

    /**
     * Award player with points in game
     *
     * @param Round $round
     * @param integer $points
     * @param integer $percentage
     * @return bool
     */
    public function awardWithPoints(Round $round, int $points, int $percentage = 0)
    {
        $extraPoints = (int)round(($points * $percentage) / 100);
        $sumPoints = $points + $extraPoints;

        if ($sumPoints <= 0) {
            $sumPoints = 1;
        }

        return $this->rounds()->updateExistingPivot($round->id, ['guessed' => true, 'points' => $sumPoints]);
    }

    /**
     * Player guessed word ?
     *
     * @param Round $round
     * @return boolean
     */
    public function hasGuessedWord(Round $round)
    {
        $round_player = $this->rounds()->wherePivot('round_id', $round->id)->first();
        if (empty($round_player)) return false;
        return (bool)$round_player->score->guessed;
    }

    // scopes
    public function scopeActive($query)
    {
        return $query->whereHas('rooms', function ($query) {
            $query->where('player_room.active', true);
        });
    }
}
