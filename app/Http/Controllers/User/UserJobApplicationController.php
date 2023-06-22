<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\Models\Application;
use App\Models\Job;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserJobApplicationController extends ApiController
{
    public function store(Request $request, User $user, Job $job)
    {
        return DB::transaction(function () use ($request, $user, $job)
        {
            $application = Application::create([
                'job_id' => $job->id,
                'user_id' => $user->id,
                'archivo_cv' => "pending",
                'mensaje' => $request->mensaje,
            ]);

            return $this->showOne($application, 201);
        });
    }
}
