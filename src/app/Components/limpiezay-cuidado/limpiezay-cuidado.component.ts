import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';

@Component({
  selector: 'app-limpiezay-cuidado',
  templateUrl: './limpiezay-cuidado.component.html',
  styleUrls: ['./limpiezay-cuidado.component.css']
})
export class LimpiezayCuidadoComponent implements OnInit {
  forms:Array<Form> = [
    {
      title: 'Detergente',
      productos:[
        {
          nombreProducto: 'Cif',
          precioUnitario: 73,
          imgUrl: './../../../../assets/Productos/Cif.png'
        },
        {
          nombreProducto: 'Ala',
          precioUnitario: 75,
          imgUrl: './../../../../assets/Productos/Ala.png'
        },
        {
          nombreProducto: 'Magistral',
          precioUnitario: 122,
          imgUrl: './../../../../assets/Productos/Magistral.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 54,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    },
    {
      title: 'Pasta dental',
      productos:[
        {
          nombreProducto: 'Colgate',
          precioUnitario: 52,
          imgUrl: './../../../../assets/Productos/Colgate.png'
        },
        {
          nombreProducto: 'Odol',
          precioUnitario: 79,
          imgUrl: './../../../../assets/Productos/Odol.png'
        },
        {
          nombreProducto: 'Sensodyne',
          precioUnitario: 206,
          imgUrl: './../../../../assets/Productos/Sensodyne.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 80,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    },
    {
      title: 'Enjuage bucal',
      productos:[
        {
          nombreProducto: 'Colgate',
          precioUnitario: 235,
          imgUrl: './../../../../assets/Productos/Colgate.png'
        },
        {
          nombreProducto: 'Listerine',
          precioUnitario: 275,
          imgUrl: './../../../../assets/Productos/Listerine.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 200,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    }
  ];

  
  constructor(public Respuesta: RespuestaService) {
  }
  
  ngOnInit(): void {
  }

  RespuestaUno:any = this.Respuesta.Respuesta3

  submit(){
    this.Respuesta.RespuestaFinal.TotalMensual += this.Respuesta.Respuesta3.TotalMensual
    this.Respuesta.RespuestaFinal.TotalAnual += this.Respuesta.Respuesta3.TotalAnual
    this.Respuesta.RespuestaFinal.CantidadBotellas += this.Respuesta.Respuesta3.CantidadBotellas
  }

}


export class Form{
  title:string;
  productos:Array<Producto>;
  tamProducto: boolean;
}

export class Producto{
  nombreProducto:string;
  precioUnitario:number;
  imgUrl:string;
}
