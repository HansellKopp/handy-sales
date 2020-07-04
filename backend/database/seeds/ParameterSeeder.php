<?php

use App\Parameter;
use Illuminate\Database\Seeder;

class ParameterSeeder extends Seeder
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
        $file = json_decode(file_get_contents(dirname(__FILE__) . '/imports/parameters.json'), true);
        foreach ($file as $key => $value) {
            $parameter = new Parameter();
            $parameter->rif = $value['rif'];
            $parameter->name = $value['name'];
            $parameter->save();
        }
    }
}
