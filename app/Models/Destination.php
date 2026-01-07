<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $region_id
 * @property string $name
 * @property string $category
 * @property string $description
 * @property string $open_time
 * @property string $close_time
 * @property bool $operational
 * @property float $ticket_price
 * @property string $location
 * @property string $thumbnail
 * @property string $public_id
 */

class Destination extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'destinations';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'region_id',
        'name',
        'category',
        'description',
        'open_time',
        'close_time',
        'operational',
        'ticket_price',
        'location',
        'thumbnail',
        'public_id',
    ];

    protected function casts(): array
    {
        return [
            'open_time' => 'datetime:H:i',
            'close_time' => 'datetime:H:i',
            'operational' => 'boolean',
            'ticket_price' => 'decimal:2',
        ];
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function facilities()
    {
        return $this->belongsToMany(Facility::class, 'destination_facilities');
    }
}
