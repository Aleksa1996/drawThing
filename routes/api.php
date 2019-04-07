<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
// Route::l('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['middleware' => 'api'], function ($router) {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', 'Auth\AuthController@login');
        Route::post('register', 'Auth\AuthController@register');
        Route::post('logout', 'Auth\AuthController@logout');
        Route::post('refresh', 'Auth\AuthController@refresh');
        Route::post('me', 'Auth\AuthController@me');
    });

    Route::group(['prefix' => 'players'], function () {
        Route::get('/', 'PlayerController@index');
        Route::get('/{id}', 'PlayerController@show');
        Route::post('/', 'PlayerController@store');
        Route::put('/', 'PlayerController@update');
        Route::delete('/', 'PlayerController@destroy');
    });

    Route::group(['prefix' => 'rooms', 'middleware' => 'playerAuth'], function () {
        Route::get('/', 'RoomController@index');
        Route::get('/{id}', 'RoomController@show');
        Route::post('/', 'RoomController@store');
        Route::put('/', 'RoomController@update');
        Route::delete('/', 'RoomController@destroy');

        Route::post('/join', 'RoomController@join');
        Route::post('/kick', 'RoomController@kick');
    });

    Route::group(['prefix' => 'game', 'middleware' => 'playerAuth'], function () {
        Route::post('/start', 'GameController@start');
    });

    Route::group(['prefix' => 'contact'], function () {
        Route::post('submit', 'ContactController@submit');
    });

    if (env('APP_ENV') === 'local') {
        Route::get('/_test', 'GameController@test');

        Route::get('/_mail', function () {
            $data = [
                'name' => 'Aleksa',
                'email' => 'aleksa.j.1996@gmail.com',
                'subject' => 'Contact about bug',
                'message' => 'Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry.
                                Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.'
            ];

            return new App\Mail\ContactForm($data);
        });
    }
});
