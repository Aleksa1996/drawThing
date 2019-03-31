<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Word
 *
 * @property integer $id
 * @property string $word
 * @property integer $points_worth
 * @property string $type
 *
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Word extends Model
{
    // options
    protected $fillable = ['word', 'points_worth', 'type'];

    // relationships
    // public function room()
    // {
    //     return $this->belongsTo('App\Models\Room');
    // }

    // public function players()
    // {
    //     return $this->belongsToMany('App\Models\Player');
    // }

    // public function rounds()
    // {
    //     return $this->hasMany('App\Models\Round');
    // }

    // mutators

    // accessors

    /**
     * Get length of characters in a word
     *
     * @return integer
     */
    public function getClengthAttribute()
    {
        return strlen($this->word);
    }

    public function getWordAttribute($value)
    {
        return strtolower($value);
    }

    // methods

    /**
     * returns 3 words with different difficulties
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getWordsToChoose(Room $room)
    {
        $words = [];
        $except = $room->games()->with('rounds.word:id')->get()->pluck('rounds.*.word.id')->flatten()->filter();

        $words[] = self::getWords('easy', $except)->first();
        $words[] = self::getWords('medium', $except)->first();
        $words[] = self::getWords('hard', $except)->first();
        return collect($words);
    }

    //scopes
    public function scopeGetWords($query, $type, $except = null)
    {
        if (!empty($except)) {
            $query->whereNotIn('id', $except->toArray());
        }

        return $query->where('type', $type)->inRandomOrder()->take(1);
    }
}
