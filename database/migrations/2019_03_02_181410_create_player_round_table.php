<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayerRoundTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('player_round', function (Blueprint $table) {
            $table->increments('id');

            $table->boolean('guessed')->default(false);
            $table->integer('score')->default(0);

            $table->unsignedInteger('player_id');
            $table->unsignedInteger('round_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('player_round');
    }
}
