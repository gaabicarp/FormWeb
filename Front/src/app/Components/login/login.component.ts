import { Component, OnInit } from '@angular/core';
import { FormWebService } from 'src/app/Services/form-web.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  load:boolean = false;
  errorMensaje: string;
  error:boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login = {
    usuario: '',
    password:''
  }
  
  ingresar(forma:NgForm){
    this.load = true;
    if(forma.invalid){
      Object.values(forma.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return
    }
    const obj={
      Email: forma.value.usuario,
      Password: forma.value.password
    }
    
    this.userService.login(obj).subscribe(res=>{
      console.log(res)
      if(res.ok === 1){
        this.load = false;
        this.error = true;
        this.errorMensaje = res.message;
        return
      }
      this.guardarToken(res.token)
      this.router.navigateByUrl('home')
    })

    // console.log(forma.value.usuario)

    // this._fw.login(forma.value.usuario, forma.value.password);
  }

  private guardarToken(idToken: string) {
    localStorage.setItem('token', idToken);  
  }
}
