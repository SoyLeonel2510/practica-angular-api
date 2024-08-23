import { JugadorService } from './../servicios/jugador.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {
  constructor(private jugadorService:JugadorService){}

  storeJugador(cedula:any,nombre:any,edad:any,equipo_actual:any){
    this.jugadorService.storeJugador(cedula.value,nombre.value,edad.value,equipo_actual.value).subscribe({
      next:(data)=>{
          debugger
      },
      error:(error)=>{
          debugger
      }
    })
  }


}
