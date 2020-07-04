<?php

namespace App\Http\Controllers;

use Log;
use Validator;
use App\Parameter;
use App\Http\Resources\Parameter as ParameterResource;
use \Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;

use Illuminate\Http\Request;

class ParameterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $parameters =  Parameter::findOrFail(1);

        return response()->json([$parameters], 200);
    }
}
