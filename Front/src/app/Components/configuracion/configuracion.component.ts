import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.autenticar();    
  }

  back(){
    this.router.navigateByUrl('/home')
  }

}
