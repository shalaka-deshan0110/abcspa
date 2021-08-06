<?php

namespace Database\Seeders;

use Database\Seeders\Auth\UsersPermissionsRolesTableSeeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        Model::unguard();

        // Add development, testing, staging seeders here.
		if (!app()->environment('production')) {
            $this->call(UsersPermissionsRolesTableSeeder::class);
            $this->call(CustomerSeeder::class);
        }
    }
}
