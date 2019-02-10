<?php

use Illuminate\Http\Request;
use SwooleTW\Http\Websocket\Facades\Websocket;

/*
|--------------------------------------------------------------------------
| Websocket Routes
|--------------------------------------------------------------------------
|
| Here is where you can register websocket events for your application.
|
 */

Websocket::on('connect', function ($websocket, Request $request) {
    // called while socket on connect
    var_dump('connected');
});

Websocket::on('disconnect', function ($websocket) {
    // called while socket on disconnect
    var_dump('disconnected');
});

Websocket::on('CREATE_ROOM', '\App\Http\Controllers\Game\GameController@createRoom_ws');
