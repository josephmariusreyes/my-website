<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class CvController extends Controller
{
    public function getCvInfo(): JsonResponse
    {
        return response()->json([
            'name'     => 'John Doe',
            'title'    => 'Software Engineer',
            'summary' => 'Hello world',
        ]);
    }
}
