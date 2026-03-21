<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class CvController extends Controller
{
    public function getCvInfo(): JsonResponse
    {
        $data = json_decode(file_get_contents(resource_path('data/cv.json')), true);

        return response()->json($data);
    }
}
