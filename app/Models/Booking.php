<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $user_id
 * @property string $destination_id
 * @property string $booking_date
 * @property string $visit_date
 * @property float $total_price
 * @property string $status
 */

class Booking extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'bookings';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'user_id',
        'destination_id',
        'booking_date',
        'visit_date',
        'total_price',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'booking_date' => 'date',
            'visit_date' => 'date',
            'total_price' => 'decimal:2',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }
}
