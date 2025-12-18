<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        app(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();

        // Permissions
        Permission::firstOrCreate(['name' => 'view dashboard']);
        Permission::firstOrCreate(['name' => 'manage users']);

        // Roles
        $admin   = Role::firstOrCreate(['name' => 'admin']);
        $manager  = Role::firstOrCreate(['name' => 'manager']);
        $tourist = Role::firstOrCreate(['name' => 'tourist']);

        // Grant permissions
        $admin->givePermissionTo(['view dashboard', 'manage users']);
        $manager->givePermissionTo(['view dashboard']);
        $tourist->givePermissionTo(['view dashboard']);
    }
}
