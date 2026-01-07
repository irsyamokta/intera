<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $country_id
 * @property string $region_name
 * @property string $description
 */

class Region extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'regions';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'country_id',
        'region_name',
        'description',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function destinations()
    {
        return $this->hasMany(Destination::class);
    }
}
