import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import $ from 'jquery'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  mensajeOk:boolean = false;
  mensajeFail: boolean = false;
  error:string;
  load:boolean=false;

  registro = {
    correo: '',
    password: '',
    confirmpassword: ''
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // const fragment = document.createRange().createContextualFragment('<form action="http://localhost:4000/payment/new" method="POST"><script src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js" data-public-key="TEST-01d48362-187b-42c7-867d-47149fd278c2" data-transaction-amount="100.00"> </script> </form>');
    // let boton = document.getElementById('botonMp')
    // boton.appendChild(fragment);
  }

  IraPago(forma:NgForm){
    this.load = true;
    console.log(forma)
    if(forma.invalid){
      Object.values(forma.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return
    }

    if(forma.value.password != forma.value.confirmpassword){
      return
    }

    const obj = {
      Email: forma.value.correo,
      Password: forma.value.password
    }

    console.log(obj)

    this.userService.grabarCliente(obj).subscribe(res=>{
      console.log(res)
      if(res.ok === 0){
        this.load = false;
        this.mensajeOk = true;
        setTimeout(()=>{
          this.router.navigateByUrl("/login")
        },2000)
      }else{
        this.load = false;
        this.mensajeFail = true;
        this.error = res.respuesta;
      }
    })


  }

}
