import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  id:string;
  link:string;
  copiado:boolean;

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUsuario()
    this.id = this.user.id
    console.log(this.id)
    this.link = `https://formweb-6a8db.web.app/form/${this.id}`
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

  copy(input){
    this.copiado = true;
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);

  }



}
