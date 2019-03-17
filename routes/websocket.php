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

Websocket::on('connect', '\App\Http\Controllers\WebsocketController@onConnect');
Websocket::on('disconnect', '\App\Http\Controllers\WebsocketController@onDisconnect');
Websocket::on('LEAVE_ROOM', '\App\Http\Controllers\WebsocketController@onDisconnect');

Websocket::on('SEND_MESSAGE_ROOM', '\App\Http\Controllers\GameController@onRoomMessage');
Websocket::on('SEND_DRAWING', '\App\Http\Controllers\GameController@onDrawing');
