import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { RespuestaService } from 'src/app/Services/respuesta.service';

@Component({
  selector: 'app-cuidado-hogar',
  templateUrl: './cuidado-hogar.component.html',
  styleUrls: ['./cuidado-hogar.component.css']
})

export class CuidadoHogarComponent implements OnInit {

  forms:Array<Form> = [
    {
      id: 0,
      title: 'Desengrasante',
      productos:[
        {
          nombreProducto: 'Cif Antigrasa',
          precioUnitario: 58,
          imgUrl: './../../../../assets/Productos/Cif.png'
        },
        {
          nombreProducto: 'Mr Musculo',
          precioUnitario: 53,
          imgUrl: './../../../../assets/Productos/Mr Musculo.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 45,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    },
    {
      id: 1,
      title: 'Limpiador de Piso',
      productos:[
        {
          nombreProducto: 'Poett',
          precioUnitario: 62,
          imgUrl: './../../../../assets/Productos/Poet.png'
        },
        {
          nombreProducto: 'Glade',
          precioUnitario: 70,
          imgUrl: './../../../../assets/Productos/Glade.png'
        },
        {
          nombreProducto: 'Pino Lux',
          precioUnitario: 80,
          imgUrl: './../../../../assets/Productos/PinoLux.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 45,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    },
    {
      id: 2,
      title: 'Desinfectante',
      productos:[
        {
          nombreProducto: 'Lysoform',
          precioUnitario: 138,
          imgUrl: './../../../../assets/Productos/Lysoform.png'
        },
        {
          nombreProducto: 'Ayudin',
          precioUnitario: 141,
          imgUrl: './../../../../assets/Productos/Ayudin.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 120,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: false,
    },
    {
      id: 3,
      title: 'Limpiador de Muebles',
      productos:[
        {
          nombreProducto: 'Ceramicol',
          precioUnitario: 120,
          imgUrl: './../../../../assets/Productos/Ceramicol.png'
        },
        {
          nombreProducto: 'Blem',
          precioUnitario: 160,
          imgUrl: './../../../../assets/Productos/Blem.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 90,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: false,
    }
  ];

  


  constructor(public Respuesta: RespuestaService) {
  }

  ngOnInit(): void {
    console.log(this.forms)
  }

  RespuestaUno:any = this.Respuesta.Respuesta1

  submit(){
    this.Respuesta.RespuestaFinal.TotalMensual = this.Respuesta.Respuesta1.TotalMensual
    this.Respuesta.RespuestaFinal.TotalAnual = this.Respuesta.Respuesta1.TotalAnual
    this.Respuesta.RespuestaFinal.CantidadBotellas = this.Respuesta.Respuesta1.CantidadBotellas
  }

  
}


export class Form{
  id: number;
  title:string;
  productos:Array<Producto>;
  tamProducto: boolean;
}

export class Producto{
  nombreProducto:string;
  precioUnitario:number;
  imgUrl:string;
}
