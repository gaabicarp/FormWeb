import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';

@Component({
  selector: 'app-lavanderia',
  templateUrl: './lavanderia.component.html',
  styleUrls: ['./lavanderia.component.css']
})
export class LavanderiaComponent implements OnInit {

  forms:Array<Form> = [
    {
      id: 0,
      title: 'Jabon liquido para ropa',
      productos:[
        {
          nombreProducto: 'Skip',
          precioUnitario: 125,
          imgUrl: './../../../../assets/Productos/Skip.png'
        },
        {
          nombreProducto: 'Ala',
          precioUnitario: 100,
          imgUrl: './../../../../assets/Productos/Ala.png'
        },
        {
          nombreProducto: 'Ariel',
          precioUnitario: 450,
          imgUrl: './../../../../assets/Productos/Ariel.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 75,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    },
    {
      id: 1,
      title: 'Jabon en polvo',
      productos:[
        {
          nombreProducto: 'Skip',
          precioUnitario: 154,
          imgUrl: './../../../../assets/Productos/Skip.png'
        },
        {
          nombreProducto: 'Ala',
          precioUnitario: 175,
          imgUrl: './../../../../assets/Productos/Ala.png'
        },
        {
          nombreProducto: 'Drive',
          precioUnitario: 135,
          imgUrl: './../../../../assets/Productos/Drive.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 85,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: true,
    },
    {
      id: 2,
      title: 'Suavizante',
      productos:[
        {
          nombreProducto: 'Vivere',
          precioUnitario: 108,
          imgUrl: './../../../../assets/Productos/Vivere.png'
        },
        {
          nombreProducto: 'Comfort',
          precioUnitario: 124,
          imgUrl: './../../../../assets/Productos/Comfort.png'
        },
        {
          nombreProducto: 'Querubin',
          precioUnitario: 116,
          imgUrl: './../../../../assets/Productos/Querubin.png'
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
      id: 3,
      title: 'Blanqueador',
      productos:[
        {
          nombreProducto: 'Vanish',
          precioUnitario: 92,
          imgUrl: './../../../../assets/Productos/Vanish.png'
        },
        {
          nombreProducto: 'Ala',
          precioUnitario: 100,
          imgUrl: './../../../../assets/Productos/Ala.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 75,
          imgUrl: './../../../../assets/Productos/Otro.png'
        }
      ],
      tamProducto: false,
    },
    {
      id: 4,
      title: 'Quitamanchas',
      productos:[
        {
          nombreProducto: 'Vanish',
          precioUnitario: 120,
          imgUrl: './../../../../assets/Productos/Vanish.png'
        },
        {
          nombreProducto: 'Rex',
          precioUnitario: 106,
          imgUrl: './../../../../assets/Productos/Rex.png'
        },
        {
          nombreProducto: 'Trenet',
          precioUnitario: 80,
          imgUrl: './../../../../assets/Productos/Trenet.png'
        },
        {
          nombreProducto: 'Otro',
          precioUnitario: 60,
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


  RespuestaUno:any = this.Respuesta.Respuesta2

  submit(){
    this.Respuesta.RespuestaFinal.TotalMensual += this.Respuesta.Respuesta2.TotalMensual
    this.Respuesta.RespuestaFinal.TotalAnual += this.Respuesta.Respuesta2.TotalAnual
    this.Respuesta.RespuestaFinal.CantidadBotellas += this.Respuesta.Respuesta2.CantidadBotellas
  }

}


export class Form{
  id: number;
  title:string;
  productos:Array<Producto>;
  tamProducto:boolean;
}

export class Producto{
  nombreProducto:string;
  precioUnitario:number;
  imgUrl:string;
}
