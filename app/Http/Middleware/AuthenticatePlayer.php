<?php

namespace App\Http\Middleware;

use Closure;

use App\Models\Player;
use \Illuminate\Validation\ValidationException;

class AuthenticatePlayer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $data = $request->validate([
            'player.id' => 'required|numeric|min:1',
            'player.username' => 'required|exists:players,username',
            'player.password' => 'required'
        ]);

        $player = Player::checkIdentity($data['player']);

        // if player does not exist or have wrong credentials
        if (empty($player)) {
            throw ValidationException::withMessages(['_general_error' => 'Wrong credentials']);
        }

        app()->instance(Player::class, $player);

        return $next($request);
    }
}
