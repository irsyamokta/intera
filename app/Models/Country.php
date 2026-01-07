<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $country_name
 */

class Country extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'countries';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'country_name',
    ];

    public function regions()
    {
        return $this->hasMany(Region::class);
    }
}
