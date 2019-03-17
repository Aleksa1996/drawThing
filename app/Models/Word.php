<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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

    // methods

    /**
     * returns 3 words with different difficulties
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getWordsToChoose()
    {
        $words = [];
        $words[] = self::where('type', 'easy')->inRandomOrder()->take(1)->first();
        $words[] = self::where('type', 'medium')->inRandomOrder()->take(1)->first();
        $words[] = self::where('type', 'hard')->inRandomOrder()->take(1)->first();
        return collect($words);
    }
}
