<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('user_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('destination_id')->constrained()->cascadeOnDelete();
            $table->date('booking_date');
            $table->date('visit_date');
            $table->decimal('total_price', 12, 2);
            $table->string('status')->default('pending'); // pending, confirmed, cancelled, etc.
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
