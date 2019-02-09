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
    var_dump('dadasda');
});

Websocket::on('disconnect', function ($websocket) {
    // called while socket on disconnect
    var_dump('dasdadad');
});

Websocket::on('sayHello', function ($websocket, $data) {
    var_dump($data);
    $websocket->emit('sayHello', $data);
});

Websocket::on('hello', function ($websocket, $data) {
    var_dump($data);
    $websocket->emit('hello', $data);
});


Websocket::on('world', function ($websocket, $data) {
    var_dump($data);
    $websocket->emit('world', $data);
});
// Websocket::on('test', 'ExampleController@method');
