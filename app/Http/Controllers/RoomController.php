<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Models\Room;
use App\Models\Player;
use App\Models\Game;


use App\Http\Resources\Room as RoomResource;
use App\Http\Resources\Player as PlayerResource;

use SwooleTW\Http\Websocket\Facades\Websocket;
use SwooleTW\Http\Websocket\Facades\Room as WebsocketRoom;


class RoomController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate recived data
        $data = $request->validate([
            'id' => 'required|numeric|min:1',
            'username' => 'required|exists:players,username',
            'password' => 'required'
        ]);

        try {
            // get current player
            $player = Player::where([
                ['id', '=', $data['id']],
                ['username', '=', $data['username']],
                ['password', '=', $data['password']]
            ])->first();

            if (empty($player)) {
                throw new \Exception('Wrong credentials!');
            }

            // creating new room
            $room = new Room();
            $room->uuid = uniqid('room_', true);
            $room->active = true;
            $room->created_by = $data['id'];
            $room->save();

            // creating new game
            $game = new Game();
            $game->room_id = $room->id;
            $game->save();

            // adding player to game
            $player->game_id = $game->id;
            $player->save();

            // joining player in created room
            WebsocketRoom::add($player->fd, $room->uuid);

            // eager load players in room
            $room->loadMissing('players');
            return response()->json(['room' => new RoomResource($room)], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
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

    public function join(Request $request)
    {
        // validate recived data
        $data = $request->validate([
            'player.id' => 'required|numeric|min:1',
            'player.username' => 'required|exists:players,username',
            'player.password' => 'required',
            'room.uuid' => 'required|string|min:1'
        ]);
        try {
            // joining player in created room
            $room = Room::where('uuid', '=', $data['room']['uuid'])->first();

            if (empty($room)) {
                throw new \Exception('The Room you tried to join does not exists anymore!');
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

            // adding player to game
            $player->game_id = $room->games()->latest()->first()->id;
            $player->save();

            // joining player in created room
            WebsocketRoom::add($player->fd, $room->uuid);

            Websocket::setSender($player->fd);
            // sending notification that new  player has joined to room
            Websocket::broadcast()->to($room->uuid)->emit('PLAYER_JOINED_ROOM', ['player' => new PlayerResource($player)]);

            $room->loadMissing('players');
            return response()->json(['room' => new RoomResource($room)], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }

    public function kick(Request $request)
    {
        // validate recived data
        $data = $request->validate([
            'player.id' => 'required|numeric|min:1',
            'player.username' => 'required|exists:players,username',
            'player.password' => 'required',
            'room.uuid' => 'required|string|min:1',
            'player_to_kick.id' => 'required|numeric|min:1'
        ]);
        // var_dump($data);
        try {
            // find player that needs to be kicked
            $playerToKick = Player::find($data['player_to_kick']['id']);
            // sending notification that new  player has joined to room
            Websocket::broadcast()->to($data['room']['uuid'])->emit('PLAYER_KICKED', ['player' => new PlayerResource($playerToKick)]);
            // remove player from room
            WebsocketRoom::delete($playerToKick->fd, $data['room']['uuid']);

            return response()->json(['player' => new PlayerResource($playerToKick)], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }
}
