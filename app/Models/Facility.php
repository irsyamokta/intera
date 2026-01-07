<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $facility_name
 */

class Facility extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'facilities';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'facility_name',
    ];

    public function destinations()
    {
        return $this->belongsToMany(Destination::class, 'destination_facilities');
    }
}
