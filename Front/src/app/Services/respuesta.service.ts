import { Injectable } from '@angular/core';
import { Respuesta } from '../model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  Respuesta1: Respuesta = new Respuesta();
  Respuesta2: Respuesta = new Respuesta();
  Respuesta3: Respuesta = new Respuesta();
  RespuestaFinal: Respuesta = new Respuesta();
  Nombre:String;
  Telefono:number;
  RespuestaCuestionario:RespuestaCuestionario = new RespuestaCuestionario;

  constructor() { }
}

export class RespuestaCuestionario {
  respuestaAhorro: string;
  respuestaAmbiente: string;
  respuestaCambio: string;

  constructor(){
    this.respuestaAhorro = this.respuestaAhorro;
    this.respuestaAmbiente = this.respuestaAmbiente;
    this.respuestaCambio = this.respuestaCambio
  }
}
