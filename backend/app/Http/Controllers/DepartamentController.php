<?php

namespace App\Http\Controllers;

use Log;
use Validator;
use App\Product;
use App\Http\Resources\Departament as DepartamentResource;
use \Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;

use Illuminate\Http\Request;

class DepartamentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $departaments = Product::select('departament')
            ->distinct()
            ->get();

        $departaments = $departaments->sortBy('departament');

        $departaments = DepartamentResource::collection($departaments);

        return response()->json($departaments, 200);
    }
}
