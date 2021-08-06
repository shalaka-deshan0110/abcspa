<?php

namespace Database\Seeders;

use App\Models\Customer;
use Faker\Factory as Factory;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Customer::query()->truncate();

        Customer::factory()->count(50)->create();
    }
}
