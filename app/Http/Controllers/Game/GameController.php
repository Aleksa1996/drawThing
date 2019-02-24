<?php

namespace App\Http\Controllers\Game;

use Validator;

use App\Models\Game;
use App\Models\Room;
use App\Models\Player;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Resources\Room as RoomResource;

use SwooleTW\Http\Websocket\Facades\Websocket;
use App\Http\Resources\Player as PlayerResource;
use SwooleTW\Http\Websocket\Facades\Room as WSRoom;


class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function sendMessageRoom_ws($websocket, $data)
    {
        try {
            // validate recived data
            // $validator = Validator::make($data, [
            //     'id' => 'required|numeric|min:1',
            //     'username' => 'required|exists:players,username',
            //     'password' => 'required',
            // ]);

            // if ($validator->fails()) {
            //     throw new \Exception('Id, username and password are required!');
            // }
            $message = ['message' => ['id' => uniqid('message_', true), 'text' => $data['message']['text'], 'player_id' => $data['player']['id']]];
            $websocket->emit('SEND_MESSAGE_ROOM_SUCCESS', $message);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_MESSAGE_ROOM', $message);
        } catch (\Exception $e) {
            $websocket->emit('SEND_MESSAGE_ROOM_FAILURE', [
                'message' => $e->getMessage()
            ]);
        }
    }
}
