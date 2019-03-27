<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rounds', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('number')->default(1);
            $table->enum('status', ['starting', 'in_progress', 'finished']);

            $table->unsignedInteger('game_id');
            $table->unsignedInteger('word_id')->nullable(true);
            $table->unsignedInteger('drawn_by');

            $table->timestamps();
            $table->timestamp('finishing_at')->nullable(true);
            $table->timestamp('started_at')->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rounds');
    }
}
