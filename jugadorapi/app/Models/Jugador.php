<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    use HasFactory;
    protected $table ='jugadors';
    protected $fillable = ['cedula','nombre','edad','equipo_actual'];

    public $timestamps = false;
}
