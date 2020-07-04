<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->imports();
    }

    public function imports()
    {
        $file = json_decode(file_get_contents(dirname(__FILE__) . '/imports/products.json'), true);
        foreach ($file as $key => $value) {
            $product = new Product();
            $product->sku = $value['sku'];
            $product->description = $value['description'];
            $product->tax = $value['tax'];
            $product->price = floatVal(str_replace(',','.', $value['price']));
            $product->departament = $value['departament'];
            $product->stock = $value['stock'];
            $product->unit = $value['unit'];
            $product->save();
        }
    }
}
