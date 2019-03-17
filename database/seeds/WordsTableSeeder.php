<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class WordsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $words = [];
        $words['easy_words'] = json_decode(Storage::disk('public')->get('easy.json'), true);
        $words['medium_words'] = json_decode(Storage::disk('public')->get('medium.json'), true);
        $words['hard_words'] = json_decode(Storage::disk('public')->get('hard.json'), true);

        foreach ($words as $type => $collection) {
            DB::table('words')->insert($collection['words']);
        }
    }
}
