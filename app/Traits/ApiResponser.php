<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

trait ApiResponser
{
    // respuesta en general
    private function successResponse($data, $code)
    {
        return response()->json($data, $code);
    }

    // respuesta de error
    protected function errorResponse($message, $code)
    {
        return response()->json([
            'errors' => $message,
            'code' => $code
        ], $code);
    }

    // respuesta que no es error
    protected function showMessage($message, $code = 200)
    {
        $ok = collect();
        $ok->put('data', $message);
        return $this->successResponse($ok, $code);
    }

    // mostrar colecciones
    protected function showAll($response, $code = 200)
    {
        $ok = collect();
        if ($response instanceof Collection) {
            $ok->put('data', $response);
        }
        return $this->successResponse($ok, $code);
    }

    // mostrar instancias
    protected function showOne(Model $response, $code = 200)
	{
        $ok = collect();
        $ok->put('data', $response);

		return $this->successResponse($ok, $code);
	}
}
