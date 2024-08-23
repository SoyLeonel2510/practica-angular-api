import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private http: HttpClient) { }
  storeJugador(cedula:string,nombre:string, edad:string,equipo_actual:string){//hacemos metodo store para registar cine
    const parametros={    //declaramos nuestros campos
      "cedula":cedula,
      "nombre":nombre,
      "edad":edad,
      "equipo_actual":equipo_actual
    }
    
    return this.http.post('http://127.0.0.1:8000/api/jugadors',parametros) // pasamos la direccion de postman para registrar
  }
  
}
