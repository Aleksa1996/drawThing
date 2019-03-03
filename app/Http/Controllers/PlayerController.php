<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Player;

use App\Http\Resources\Player as PlayerResource;

class PlayerController extends Controller
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
            'username' => 'required|min:3|max:16',
            'avatar' => 'required|file|image',
            'fd' => 'required|numeric'
        ]);

        try {
            // upload image
            $data['avatar'] = $request->avatar->store('img/avatar', ['disk' => 'uploads']);

            // creating new player
            $player = Player::create($data);

            return response()->json(['player' => new PlayerResource($player)], 201);
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
}
