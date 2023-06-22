<?php

namespace App\Http\Controllers\Job;

use App\Http\Controllers\ApiController;
use App\Models\Job;
use Illuminate\Support\Facades\DB;

class JobApplicantController extends ApiController
{
    public function index(Job $job)
    {
        $currentApplicants = DB::table('users')
            ->join('applications', 'users.id', '=', 'applications.user_id')
            ->join('applicants', 'users.id', '=', 'applicants.user_id')
            ->select('users.id', 'applicants.nombres', 'applicants.apellidos')
            ->where('applications.job_id', $job->id)
            ->get();
       return $this->showAll($currentApplicants);
    }
}
