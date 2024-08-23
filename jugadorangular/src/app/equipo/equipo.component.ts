import { JugadorService } from './../servicios/jugador.service';
import { EquipoService } from './../servicios/equipo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  jugadors:any

  constructor(private EquipoService:EquipoService){}

  ngOnInit(){   //llamado de datos en el combobox
    this.getequipo();
  }

  getequipo(){    //mostrar todos los cine 
    this.EquipoService.getjugador().subscribe({
      next:(data:any)=>{
          this.jugadors = data.jugadores
      },
      error:(error)=>{
          debugger
      }
    })
  }

  storeEquipo(numero_dorsal:any,nombre_camisa:any,posicion:any,jugador:any){
    this.EquipoService.storeEquipo(numero_dorsal.value,nombre_camisa.value,posicion.value,jugador.value).subscribe({
      next:(data)=>{
          debugger
      },
      error:(error)=>{
          debugger
      }
    })
  }
}
