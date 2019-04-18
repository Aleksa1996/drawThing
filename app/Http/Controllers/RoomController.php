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

use Illuminate\Validation\ValidationException;

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
    public function store(Player $player)
    {
        // creating new room
        $room = Room::create([
            'uuid' => '',
            'active' => true,
            'number_of_games' => 3,
            'round_length' => 60,
            'created_by' => $player->id,
            'administered_by' => $player->id
        ]);

        // joining player in created room in db and then in websocket table
        $room->players()->attach($player->id);
        WebsocketRoom::add($player->fd, $room->uuid);

        // eager load players in room
        $room->loadMissing('players');
        return response()->json(['room' => new RoomResource($room)], 201);
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

    public function join(Request $request, Player $player)
    {
        // validate recived data
        $data = $request->validate([
            'room.uuid' => 'required|string|min:1'
        ]);

        // joining player in created room
        $room = Room::active()->findByUuid($data['room']['uuid'])->first();

        if (is_null($room)) {
            throw ValidationException::withMessages(['_general_error' => ['The Room you tried to join does not exists anymore!']]);
        }

        // check if player username already exists in room
        if ($room->isPlayerUsernameOccupied($player->username)) {
            $player->handleUsernameOccupied();
        }

        // joining player in room
        $room->players()->attach($player->id);
        WebsocketRoom::add($player->fd, $room->uuid);


        if ($room->hasGameInProgress()) {
            $game = $room->getCurrentGame();
            if (empty($game)) {
                throw ValidationException::withMessages(['_general_error' => ['Game is not valid!']]);
            }
            $round = $game->getCurrentRound();
            if (empty($round)) {
                throw ValidationException::withMessages(['_general_error' => ['Round is not valid!']]);
            }
            // round
            $round->players()->attach($player->id);
        }

        $playerResource = new PlayerResource($player);

        // sending notification that new  player has joined to room
        Websocket::setSender($player->fd);
        Websocket::broadcast()->to($room->uuid)->emit('PLAYER_JOINED_ROOM', ['player' => $playerResource]);

        $room->loadActivePlayers();
        return response()->json(['room' => new RoomResource($room), 'player' => $playerResource], 200);
    }

    public function kick(Request $request, Player $player)
    {
        // validate recived data
        $data = $request->validate([
            'room.uuid' => 'required|string|min:1',
            'player_to_kick.id' => 'required|numeric|min:1'
        ]);

        // if player is admin
        if (!$player->isAdminInRoom($data['room']['uuid'])) {
            throw new \Exception('You dont have permissions to do that!');
        }

        // find player that we need to kick
        $playerToKick = Player::find($data['player_to_kick']['id']);
        $playerToKick->disconnectFromRoom();

        // sending notification that player is kicked
        Websocket::broadcast()->to($data['room']['uuid'])->emit('PLAYER_KICKED', ['player' => new PlayerResource($playerToKick)]);
        // remove player from websocket room
        WebsocketRoom::delete($playerToKick->fd, $data['room']['uuid']);

        return response()->json(['player' => new PlayerResource($playerToKick)], 200);
    }
}
