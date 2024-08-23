<?php

use App\Http\Controllers\EquipoController;
use App\Http\Controllers\JugadorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::Resource('jugadors',JugadorController::class);
Route::get('jugador',[JugadorController::class,'index']);

Route::Resource('equipos',EquipoController::class);
Route::get('equipo',[EquipoController::class,'index']);