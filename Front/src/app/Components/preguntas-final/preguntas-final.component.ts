import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-preguntas-final',
  templateUrl: './preguntas-final.component.html',
  styleUrls: ['./preguntas-final.component.css']
})
export class PreguntasFinalComponent implements OnInit {
  forma: FormGroup;
  load:boolean = false;
  
  constructor(public Respuesta: RespuestaService, private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.Respuesta.RespuestaFinal.CantidadBotellas = this.Respuesta.RespuestaFinal.CantidadBotellas * 12
  }

  async onSubmit(){
    this.load = true;
    if(this.forma.invalid){
      Object.values(this.forma.controls).forEach(control=>{
        control.markAllAsTouched()
      })
      return
    }
    this.Respuesta.RespuestaCuestionario.respuestaAhorro = this.forma.value.ahorro
    this.Respuesta.RespuestaCuestionario.respuestaAmbiente = this.forma.value.ambiente
    this.Respuesta.RespuestaCuestionario.respuestaCambio = this.forma.value.cambio

    var templateParams = {
      //Cuidado Del Hogar
      desengrasante: this.Respuesta.Respuesta1.Detalle[0],
      limpiadorDePiso: this.Respuesta.Respuesta1.Detalle[1],
      desinfectante : this.Respuesta.Respuesta1.Detalle[2],
      limpiadorDeMuebles: this.Respuesta.Respuesta1.Detalle[3],
      //Lavanderia
      jabonliquido: this.Respuesta.Respuesta2.Detalle[0],
      JabonEnPolvo: this.Respuesta.Respuesta2.Detalle[1],
      suavizante: this.Respuesta.Respuesta2.Detalle[2],
      blanqueador: this.Respuesta.Respuesta2.Detalle[3],
      quitamanchas: this.Respuesta.Respuesta2.Detalle[4],
      //CuidadoPersonal
      detergente: this.Respuesta.Respuesta3.Detalle[0],
      pastaDental: this.Respuesta.Respuesta3.Detalle[1],
      enjuageBucal: this.Respuesta.Respuesta3.Detalle[2],
      //Resto
      clienteNombre: this.Respuesta.Nombre,
      clienteTelefono: this.Respuesta.Telefono,
      totalMensual: this.Respuesta.RespuestaFinal.TotalMensual,
      totalAnual: this.Respuesta.RespuestaFinal.TotalAnual,
      totalBotellas: this.Respuesta.RespuestaFinal.CantidadBotellas,
      aceptaAhorro: this.Respuesta.RespuestaCuestionario.respuestaAhorro,
      aceptaAmbiente: this.Respuesta.RespuestaCuestionario.respuestaAmbiente,
      aceptaCambio: this.Respuesta.RespuestaCuestionario.respuestaCambio,
      Id: this.Respuesta.IdUsuario
    }

    await this.userService.postResultado(templateParams).subscribe(res=>{
      console.log(res)
    })

    this.router.navigate(['final'])

  }

  get AhorroNoValido(){
    return this.forma.get('ahorro').invalid && this.forma.get('ahorro').touched
  }

  get AmbienteNoValido(){
    return this.forma.get('ambiente').invalid && this.forma.get('ambiente').touched
  }

  get CambioNoValido(){
    return this.forma.get('cambio').invalid && this.forma.get('cambio').touched
  }
  // preguntasChangeHandler(e){
  //   console.log(e.target.name)
  //   let rta = e.target.value

  //   if(e.target.name === 'ahorro'){
  //     this.Respuesta.RespuestaCuestionario.respuestaAhorro = rta;
  //   } 
    
  //   if(e.target.name === 'ambiente'){
  //     this.Respuesta.RespuestaCuestionario.respuestaAmbiente = rta;
  //   } 
    
  //   if(e.target.name === 'cambio'){
  //     this.Respuesta.RespuestaCuestionario.respuestaCambio = rta;
  //   }
  
  //   console.log(this.Respuesta.RespuestaCuestionario)
  // }

  crearFormulario(){
    this.forma = this.fb.group({
      ahorro:['', Validators.required],
      ambiente:['', Validators.required],
      cambio:['', Validators.required]
    })
  }

  


}
