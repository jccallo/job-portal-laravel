<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\File\FileController;
use App\Http\Controllers\Job\JobApplicantController;
use App\Http\Controllers\Job\JobController;
use App\Http\Controllers\User\UserJobApplicationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* auth */
Route::post('login', [AuthenticatedSessionController::class, 'store']);
Route::post('register', [RegisteredUserController::class, 'store']);

/* jobs */
Route::apiResource('jobs', JobController::class);
Route::apiResource('jobs.applicants', JobApplicantController::class)->only('index');

/* file */
Route::apiResource('files', FileController::class)->only('store');

/* users */
Route::apiResource('users.jobs.applications', UserJobApplicationController::class)->only('store');
