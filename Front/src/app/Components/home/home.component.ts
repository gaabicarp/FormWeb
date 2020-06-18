import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results:any;
  isLoading:boolean = true;
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.autenticar()
    let usuario = this.userService.getUsuario()
    this.userService.getResultados(usuario.id).subscribe(res=>{
      console.log(res)
      this.userService.resultados = res.respuesta;
      this.results  = res.respuesta;
      this.isLoading = false;
    });
  }



}
