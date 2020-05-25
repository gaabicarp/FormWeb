import { Component, OnInit } from '@angular/core';
import { FormWebService } from 'src/app/Services/form-web.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _fw: FormWebService) { }

  ngOnInit(): void {
  }

  login = {
    usuario: '',
    password:''
  }
  
  ingresar(forma:NgForm){
    if(forma.invalid){
      Object.values(forma.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return
    }

    console.log(forma.value.password)
    console.log(forma.value.usuario)

    this._fw.login(forma.value.usuario, forma.value.password);
  }
}
