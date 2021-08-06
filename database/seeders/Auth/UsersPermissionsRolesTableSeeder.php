<?php

namespace Database\Seeders\Auth;

use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class UsersPermissionsRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions for user model
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'show users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'delete users']);


        // create permissions for customer model
        Permission::create(['name' => 'create customers']);
        Permission::create(['name' => 'show customers']);
        Permission::create(['name' => 'edit customers']);
        Permission::create(['name' => 'delete customers']);


        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'user']);
        $role1->givePermissionTo('show users');
        $role1->givePermissionTo('show customers');

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('create users');
        $role2->givePermissionTo('show users');
        $role2->givePermissionTo('edit users');
        $role2->givePermissionTo('delete users');
        $role2->givePermissionTo('create customers');
        $role2->givePermissionTo('show customers');
        $role2->givePermissionTo('edit customers');
        $role2->givePermissionTo('delete customers');

        // truncate user table
        User::truncate();

        // create the Admin user
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@abccms.com',
			'password' => bcrypt('12345678'),
        ]);

        $user->assignRole($role2);

        // create regular users
        $faker = Faker::create('en_AU');

        foreach(range(1, 9) as $index)
		{
			$user = User::create([
				'name' => $faker->firstName,
				'email' => preg_replace('/@example\..*/', '@abccms.com', $faker->unique()->safeEmail),
				'password' => bcrypt('12345678'),
			]);

			$user->assignRole($role1);
		}

    }
}
