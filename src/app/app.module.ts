import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { AppRoutingModule } from './app-routing.module';
//servicios


//Componentes
import { AppComponent } from './app.component';
import { IndexComponent } from './Components/index/index.component';
import { LimpiezayCuidadoComponent } from './Components/limpiezay-cuidado/limpiezay-cuidado.component';
import { CuidadoHogarComponent } from './Components/cuidado-hogar/cuidado-hogar.component';
import { LavanderiaComponent } from './Components/lavanderia/lavanderia.component';
import { PreguntasFinalComponent } from './Components/preguntas-final/preguntas-final.component';
import { FinalComponent } from './Components/final/final.component';
import { RespuestaService } from './Services/respuesta.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './Components/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LimpiezayCuidadoComponent,
    CuidadoHogarComponent,
    LavanderiaComponent,
    PreguntasFinalComponent,
    FinalComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RespuestaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
