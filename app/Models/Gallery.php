<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $destination_id
 * @property string $image_url
 * @property string $public_id
 */

class Gallery extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'galleries';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'destination_id',
        'image_url',
        'public_id',
    ];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }
}
