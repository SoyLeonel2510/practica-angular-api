import { EquipoComponent } from './equipo/equipo.component';
import { Routes } from '@angular/router';
import { JugadorComponent } from './jugador/jugador.component';

export const routes: Routes = [
    {
        path:'jugador',component:JugadorComponent
    },
    {
        path:'equipo',component:EquipoComponent
    }
];
