import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Firebase
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmPasswordDirective } from './shared/confirm-password.directive'

//rutas
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
// import {} from 'jsonwebtoken'
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
import { FormularioComponent } from './Components/formulario/formulario.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ConfiguracionComponent } from './Components/configuracion/configuracion.component';
import { ResultItemComponent } from './Components/home/result-item/result-item.component';
import { DetalleComponent } from './Components/detalle/detalle.component';


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
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegistroComponent,
    ConfirmPasswordDirective,
    ConfiguracionComponent,
    ResultItemComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule
  ],
  providers: [
    RespuestaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
