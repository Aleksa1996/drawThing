<?php

namespace App\Http\Controllers;

use Validator;

use App\Models\Game;
use App\Models\Room;
use App\Models\Player;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Resources\Player as PlayerResource;
use App\Http\Resources\Room as RoomResource;

use SwooleTW\Http\Websocket\Facades\Websocket;

use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;


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

    public function onConnect_ws($websocket, $data)
    {
        var_dump('connected');
        try {
            // send fd to fresh connection
            $websocket->emit('CONNECT_SOCKET_DATA', ['fd' => $websocket->getSender()]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }
    }

    public function onDisconnect_ws($websocket, $data)
    {
        var_dump('disconnected');
        try {
            // find player that disconnected
            $player = Player::findByFd($websocket->getSender());

            if (is_null($player)) {
                return;
            }

            // get the room where he has left
            $room = $player->currentRoom();
            // disconnect player db and websocket tables
            $player->disconnectFromRoom($room);
            WebsocketRoom::delete($player->fd, $room->uuid);

            // send notification to others
            Websocket::broadcast()->to($room->uuid)->emit('PLAYER_LEAVED_ROOM', ['player' => new PlayerResource($player)]);
        } catch (\Exception $e) {
            var_dump($e->getMessage());
        }
    }

    public function sendMessageRoom_ws($websocket, $data)
    {
        try {
            // validate recived data
            $validator = Validator::make($data, [
                'player.id' => 'required|numeric|min:1',
                'player.username' => 'required|exists:players,username',
                'player.password' => 'required',
                'room.uuid' => 'required|string|min:1',
                'message.text' => 'required|string|min:1'
            ]);

            if ($validator->fails()) {
                throw new \Exception('You are sending wrong data!');
            }

            $message = [
                'message' => [
                    'id' => uniqid('message_', true),
                    'text' => $data['message']['text'],
                    'player_id' => $data['player']['id']
                ]
            ];
            // pass message from one player to others in same room
            $websocket->emit('SEND_MESSAGE_ROOM_SUCCESS', $message);
            $websocket->broadcast()->to($data['room']['uuid'])->emit('RECEIVE_MESSAGE_ROOM', $message);
        } catch (\Exception $e) {
            $websocket->emit('SEND_MESSAGE_ROOM_FAILURE', [
                'message' => $e->getMessage()
            ]);
        }
    }
}
