<?php

namespace App\Http\Controllers;

use Log;
use Validator;
use App\Product;
use App\Http\Resources\Offers as OffersResource;
use \Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;

use Illuminate\Http\Request;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $offers = Product::all()->random(5)->sortBy('description');

        $offers = OffersResource::collection($offers);

        return response()->json($offers, 200, [], JSON_NUMERIC_CHECK);
    }
}
