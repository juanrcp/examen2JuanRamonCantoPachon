import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorterosComponent } from './porteros/lista-porteros/lista-porteros.component';
import { PorterosModule } from './porteros/porteros.module';

const routes: Routes = [
  {path:'', component: ListaPorterosComponent},
  //Establecemos ruta para el modulo 
  {path:'porteros', loadChildren: () => import('./porteros/porteros.module').
    then(m => m.PorterosModule)
  }, 
  {path:'**', redirectTo:'/porteros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
