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

    public function createPlayer(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required|min:3|max:16',
            'avatar' => 'required|file|image'
        ]);

        try {
            // upload image
            $avatarPath = $request->avatar->store('img/avatar', ['disk' => 'uploads']);

            // creating new player
            $player = new Player();
            $player->username = $validatedData['username'];
            $player->avatar = $avatarPath;
            $player->score = 0;
            $player->save();
            // Generating password with id
            $player->password = $validatedData['username'] . '_' . $player->id;
            $player->save();

            // Response Player resource
            return response()->json(new PlayerResource($player), 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }


    public function createRoom_ws($websocket, $data)
    {
        try {
            // validate recived data
            $validator = Validator::make($data['player'], [
                'id' => 'required|numeric|min:1',
                'username' => 'required|exists:players,username',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                throw new \Exception('Id, username and password are required!');
            }

            // get current player
            $playerData = $data['player'];
            $player = Player::where([
                ['id', '=', $playerData['id']],
                ['username', '=', $playerData['username']],
                ['password', '=', $playerData['password']]
            ])->first();

            if (empty($player)) {
                throw new \Exception('Wrong credentials!');
            }

            // creating new room
            $room = new Room();
            $room->uuid = uniqid('room_', true);
            $room->active = true;
            $room->created_by = $playerData['id'];
            $room->save();

            // creating new game
            $game = new Game();
            $game->room_id = $room->id;
            $game->save();

            // appending websocket fd to player
            $player->fd = $websocket->getSender();
            $player->game_id = $game->id;
            $player->save();

            // joining player in created room
            $websocket->join($room->uuid);

            // eager load players in room
            $room->loadMissing('players');
            $websocket->emit('CREATE_ROOM_SUCCESS', ['room' => new RoomResource($room)]);

        } catch (\Exception $e) {
            $websocket->emit('CREATE_ROOM_FAILURE', [
                'message' => $e->getMessage()
            ]);
        }
    }

    public function sendMessageRoom_ws($websocket, $data)
    {
        try {
            // { id: 1, text: '', player_id: 0 }
            $message = ['message' => ['id' => uniqid('message', true), 'text' => $data['message']['text'], 'player_id' => $data['player']['id']]];
            // $websocket->broadcast()->to($data['room']['uuid'])->emit('MESSAGE_ROOM_RECEIVE', $message);
            $websocket->emit('SEND_MESSAGE_ROOM_SUCCESS', $message);
        } catch (\Exception $e) {
            $websocket->emit('SEND_MESSAGE_ROOM_FAILURE', [
                'message' => $e->getMessage()
            ]);
        }
    }
}
