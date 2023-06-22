<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'descripcion',
        'sueldo',
    ];

    public function applications(): HasMany
    {
        return $this->hasMany(Application::class);
    }
}
