<?php

use App\Http\Controllers\CvController;
use Illuminate\Support\Facades\Route;

Route::get('/cv/getCvInfo', [CvController::class, 'getCvInfo']);
