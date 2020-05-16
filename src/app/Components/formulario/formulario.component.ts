import { Component, OnInit, Input } from '@angular/core';
import { RespuestaService } from 'src/app/Services/respuesta.service';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  forma: FormGroup;
  @Input() title:string; 
  @Input() productos:Array<any>;
  @Input() respuesta:any;
  @Input() tamProducto:boolean
  productoSeleccionado = {
    precio: 0,
    tamanio: 1,
    dias: 30,
  }
  dias: number;
  tamaño: number = 1;
  // productSelectName:String;
  productSelectValue:number = 0;
  Botellas:number = 0;
  TotalParcial:number = 0;
  bandera:boolean = false ;
  tiempo:number;
  Producto:string;

  constructor(private Respuesta: RespuestaService, private fb: FormBuilder) {
    this.crearFormulario();
   }

  ngOnInit(): void {
    // console.log('desdecomp',this.productos)
  }

  productoChangeHandler(){
    console.log(this.forma)

    this.respuesta.TotalMensual -= this.TotalParcial
    this.respuesta.CantidadBotellas -= this.Botellas
    // console.log(forma.value)
    this.productoSeleccionado.precio = JSON.parse(this.forma.value.producto);
    this.productoSeleccionado.dias = JSON.parse(this.forma.value.tiempo);
    this.productoSeleccionado.tamanio = JSON.parse(this.forma.value.tamaño);

    this.Botellas = Math.round(30 / this.productoSeleccionado.dias)
    
    this.TotalParcial = Math.round(this.productoSeleccionado.precio * this.productoSeleccionado.tamanio * this.Botellas)

    this.respuesta.TotalMensual += this.TotalParcial
    this.respuesta.TotalAnual = this.respuesta.TotalMensual * 12
    this.respuesta.CantidadBotellas += this.Botellas
    console.log(this.respuesta.TotalMensual)

    // console.log(event.target.value)
    // this.respuesta.TotalMensual = this.respuesta.TotalMensual - this.TotalParcial;
    // if(event.target.name="tamaño"){
    //   this.productSelectValue = this.productSelectValue / this.tamaño
    //   this.tamaño = event.target.value;
    //   this.productSelectValue = this.productSelectValue * this.tamaño
    // }
  
    // if(event.target.name==='Producto'){
    //   this.productSelectName = event.target.value;
    //   this.productos.map(prod=>{
    //     if(prod.nombreProducto === this.productSelectName){
    //       this.productSelectValue = prod.precioUnitario * this.tamaño ;
    //     }
    //   })
    // }

    // if(event.target.name==='tiempo'){
    //   this.respuesta.CantidadBotellas = this.respuesta.CantidadBotellas - this.Botellas;
    //   this.dias = event.target.value;
    //   this.Botellas = Math.round(30/this.dias);
    //   this.respuesta.CantidadBotellas = this.respuesta.CantidadBotellas + this.Botellas;
    // }

    // if(this.productSelectValue!=0 && this.dias!=0){
    //   this.bandera = true;
    // }
    // this.TotalParcial= this.productSelectValue * this.Botellas;
    // this.respuesta.TotalMensual = this.respuesta.TotalMensual + this.TotalParcial;
    // this.respuesta.TotalAnual = this.respuesta.TotalMensual * 12;
    // // console.log(this.Respuesta.Respuesta1.TotalMensual);
    // console.log(this.productSelectValue)
  // console.log(this.Respuesta.Respuesta1.CantidadBotellas);
}

crearFormulario(){
  this.forma = this.fb.group({
    producto:[0, Validators.required],
    tiempo:[30, Validators.required],
    tamaño:[1, Validators.required]
  })
}

}
