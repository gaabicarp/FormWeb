import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  usuario ={
    nombre:'',
    telefono:'',
  }

  constructor(private Respuesta: RespuestaService, private router: Router) { }

  ngOnInit(): void {

  }


  

  guardar(forma:NgForm){

    if(forma.invalid){
      Object.values(forma.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return
    }
    this.Respuesta.Nombre = forma.value.nombre;
    this.Respuesta.Telefono = forma.value.telefono;
    this.router.navigate(['Hogar'])
    // console.log(this.Respuesta.Nombre)
    // console.log(this.Respuesta.Telefono)
  }

}
