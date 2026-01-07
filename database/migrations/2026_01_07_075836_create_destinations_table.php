<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('region_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('category');
            $table->text('description');
            $table->time('open_time');
            $table->time('close_time');
            $table->boolean('operational')->default(true);
            $table->decimal('ticket_price', 12, 2)->default(0);
            $table->string('location');
            $table->string('thumbnail')->nullable();
            $table->string('public_id')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
