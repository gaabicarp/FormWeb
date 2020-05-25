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
  @Input() id:number;
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
    let respuestaForm = this.title + ': Este producto no fue seleccionado'
    this.respuesta.Detalle[this.id] = respuestaForm;
    console.log(this.id)
  }

  productoChangeHandler(){
    this.setRespuesta()
    this.setRespuestaDetalle()
    console.log(this.respuesta)
}

crearFormulario(){
  this.forma = this.fb.group({
    producto:[0, Validators.required],
    tiempo:[30, Validators.required],
    tamaño:[1, Validators.required]
  })
}

setRespuesta(){
  this.respuesta.TotalMensual -= this.TotalParcial
  this.respuesta.CantidadBotellas -= this.Botellas
  this.productoSeleccionado.precio = JSON.parse(this.forma.value.producto);
  this.productoSeleccionado.dias = JSON.parse(this.forma.value.tiempo);
  this.productoSeleccionado.tamanio = JSON.parse(this.forma.value.tamaño);

  this.Botellas = Math.round(30 / this.productoSeleccionado.dias)
  
  this.TotalParcial = Math.round(this.productoSeleccionado.precio * this.productoSeleccionado.tamanio * this.Botellas)

  this.respuesta.TotalMensual += this.TotalParcial
  this.respuesta.TotalAnual = this.respuesta.TotalMensual * 12
  this.respuesta.CantidadBotellas += this.Botellas
}

setRespuestaDetalle(){
  let producto = this.productos.filter(producto=>{
    return producto.precioUnitario === JSON.parse(this.forma.value.producto)
  })
  let tam:string;
  if(this.forma.value.tamaño === '1'){
    tam = 'Chico'
  } else if (this.forma.value.tamaño === '1.8'){
    tam = 'Mediano'
  } else{
    tam = 'Grande'
  }

  if(this.tamProducto == false){
    tam = 'Único'
  }
  
  let respuestaForm = this.title + ': ' + producto[0].nombreProducto + ', cada ' + this.forma.value.tiempo + ' dias, de tamaño ' + tam;
  

  this.respuesta.Detalle[this.id] = respuestaForm;
}

}
