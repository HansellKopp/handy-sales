<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parameter extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'rif',
        'name',
    ];

    public static $sortFields = [
        'id',
        'rif',
        'name',
    ];

    protected $dates = ['deleted_at'];

    public static $validatorCreate = [
        'rif' => 'required|string',
        'name' => 'required|string',
    ];

    public static $validatorUpdate = [
        'rif' => 'required|string',
        'name' => 'required|string',
    ];
}
