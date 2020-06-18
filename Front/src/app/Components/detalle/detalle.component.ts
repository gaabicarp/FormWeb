import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id:string;
  respuesta: any;
  isLoading:boolean;
  constructor(private router:Router,private route:ActivatedRoute, private userService: UserService) {
    this.isLoading = true;
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.respuesta = this.userService.getDetalle(this.id);
    this.respuesta = this.respuesta[0]
    console.log(this.respuesta)
    this.isLoading = false;
  }

  back(){
    this.router.navigateByUrl('/home')
  }

}
