import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';
import { FormularioPorteroComponent } from './formulario-portero/formulario-portero.component';

const routes: Routes = [
  //Establecemos ruta para los componentes del modulo. 
  {path: 'porteros', component: ListaPorterosComponent},
  {path: 'formulario-portero/:id', component: FormularioPorteroComponent},
  {path: 'formulario-portero', component: FormularioPorteroComponent},
  {path:'**', redirectTo:'porteros', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorterosRoutingModule { }
