import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }
  
  getjugador(){
    return this.http.get('http://127.0.0.1:8000/api/jugador') // pasamos la direccion de postman para registrar
  }

  storeEquipo(numero_dorsal:any,nombre_camisa:any,posicion:any,jugador:any){//hacemos metodo store para registar habitacion
    const parametros={    //declaramos nuestros campos
      "numero_dorsal":numero_dorsal,
      "nombre_camisa":nombre_camisa,
      "posicion":posicion,
      "jugador_id":jugador
    }
    
    return this.http.post('http://127.0.0.1:8000/api/equipos',parametros) // pasamos la direccion de postman para registrar
  }

}
