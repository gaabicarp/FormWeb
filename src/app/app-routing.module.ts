import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Components/index/index.component'
import {LimpiezayCuidadoComponent} from './Components/limpiezay-cuidado/limpiezay-cuidado.component'
import {LavanderiaComponent} from './Components/lavanderia/lavanderia.component'
import {CuidadoHogarComponent} from './Components/cuidado-hogar/cuidado-hogar.component'
import {PreguntasFinalComponent} from './Components/preguntas-final/preguntas-final.component'
import {FinalComponent} from './Components/final/final.component'

const routes: Routes = [
  {path:'', component: IndexComponent },
  {path:'limpCuidado', component: LimpiezayCuidadoComponent},
  {path:'lavanderia', component: LavanderiaComponent},
  {path:'Hogar', component: CuidadoHogarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path:'ultimasPreguntas', component: PreguntasFinalComponent},
  {path:'final', component: FinalComponent},

];


 
@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
