import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(public Respuesta: RespuestaService) { }

  ngOnInit(): void {
    console.log(this.Respuesta)
  }

}
