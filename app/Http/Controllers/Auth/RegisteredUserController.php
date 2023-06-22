<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends ApiController
{
    public function store(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken($request->email)->plainTextToken;
        return $this->showMessage([
            'message' => 'Sesion iniciada Correctamente',
            'token' => $token,
            'user' => $user,
        ]);
    }
}
