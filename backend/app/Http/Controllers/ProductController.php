<?php
namespace App\Http\Controllers;

use Log;
use Validator;
use App\Product;
use App\Http\Resources\Product as ProductResource;
use \Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {

        $products = Product::all()->sortBy('description');

        $products = ProductResource::collection($products);

        return response()->json($products, 200, [], JSON_NUMERIC_CHECK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, Product::$validatorCreate);
        $createProduct = New Product($request->all());
        $createProduct->save();

        return $this->restAnswer($createProduct, 'Product created.', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $Product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $Product)
    {
        return $this->restAnswer( $Product, 'Product found.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $Product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $Product)
    {
        $validator = Validator::make($request->all(), Product::$validatorUpdate);

        if($validator->fails()){
            return $this->restAnswer([], $validator->messages(), 404);
        }

        $data = $request->all();

        $Product->update($data);
        return $this->restAnswer($Product, 'Product updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $Product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $Product)
    {
        $Product->delete();
        return $this->restAnswer($Product, 'Product deleted.');
    }
}
