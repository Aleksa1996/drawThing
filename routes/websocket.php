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

Websocket::on('connect', '\App\Http\Controllers\GameController@onConnect_ws');

Websocket::on('disconnect', '\App\Http\Controllers\GameController@onDisconnect_ws');
Websocket::on('LEAVE_ROOM', '\App\Http\Controllers\GameController@onDisconnect_ws');

Websocket::on('SEND_MESSAGE_ROOM', '\App\Http\Controllers\GameController@sendMessageRoom_ws');
