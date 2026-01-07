<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('destination_facilities', function (Blueprint $table) {
            $table->foreignUuid('destination_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('facility_id')->constrained()->cascadeOnDelete();
            $table->primary(['destination_id', 'facility_id']);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('destination_facilities');
    }
};
