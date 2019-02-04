<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // $credentials = $this->validate($request, [
        //     'email' => 'required|string|email|min:50',
        //     'password' => 'required|string|min:6|min:50',
        // ]);

        $credentials = $this->validate($request, [
            'email' => 'required|string|email',
            'password' => 'required|string|min:6|max:50',
        ]);

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['auth' => 'Username or password is invalid'], 422);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Register user with given data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        // return 'hello';
        $validatedData = $request->validate([
            'username' => 'required|string|min:2|max:50',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6|max:50',
        ]);

        $credentials = $request->only(['email', 'password']);

        User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'image' => 'https://lorempixel.com/640/480/?73686',
            'description' => 'Description...',
            'role_id' => 2
        ]);

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Username or password is invalid'], 422);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(new UserAdminResource(Auth::user()));
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out'], 200);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $ttl = Auth::factory()->getTTL();

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $ttl * 60, //seconds
            'expires_in_date' => date('c', strtotime(sprintf('+%d minutes', $ttl))),
            'role' => Auth::user()->role->name
        ]);
    }
}
