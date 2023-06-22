<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class FileController extends ApiController
{
    public function store(Request $request)
    {
        if ($request->hasFile('archivo_cv')) {
            $file = $request->file('archivo_cv');
            $nombre = time().'_'.$file->getClientOriginalName();
            $path = $file->storeAs('pdf', $nombre);
        }

        return $this->showMessage('Archivo subido correctamente');
    }
}
