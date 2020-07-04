<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'sku',
        'product',
        'tax',
        'price',
        'departament',
        'stock',
        'unit'
    ];

    public static $sortFields = [
        'id',
        'product',
        'departament',
    ];

    protected $dates = ['deleted_at'];

    public static $validatorCreate = [
        'sku' => 'required|string',
        'product' => 'required|string',
        'departament' => 'string',
        'unit' => 'string',
    ];

    public static $validatorUpdate = [
        'sku' => 'required|string',
        'product' => 'required|string',
        'departament' => 'string',
        'unit' => 'string',
    ];
}
