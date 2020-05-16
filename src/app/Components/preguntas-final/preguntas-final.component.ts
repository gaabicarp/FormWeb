import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-preguntas-final',
  templateUrl: './preguntas-final.component.html',
  styleUrls: ['./preguntas-final.component.css']
})
export class PreguntasFinalComponent implements OnInit {
  forma: FormGroup;
  
  constructor(public Respuesta: RespuestaService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.Respuesta.RespuestaFinal.CantidadBotellas = this.Respuesta.RespuestaFinal.CantidadBotellas * 12
  }

  async onSubmit(){
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
      clienteNombre: this.Respuesta.Nombre,
      clienteTelefono: this.Respuesta.Telefono,
      totalMensual: this.Respuesta.RespuestaFinal.TotalMensual,
      totalAnual: this.Respuesta.RespuestaFinal.TotalAnual,
      totalBotellas: this.Respuesta.RespuestaFinal.CantidadBotellas,
      aceptaAhorro: this.Respuesta.RespuestaCuestionario.respuestaAhorro,
      aceptaAmbiente: this.Respuesta.RespuestaCuestionario.respuestaAmbiente,
      aceptaCambio: this.Respuesta.RespuestaCuestionario.respuestaCambio
    }

    await emailjs.send('formweb', 'template_yQjnXtpW', templateParams, 'user_4v7ovCqJh03hBYynPF768')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       
    }, function(error) {
       console.log('FAILED...', error);
    });

    // this.router.navigate(['final'])
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
