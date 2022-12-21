import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorterosRoutingModule } from './porteros-routing.module';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';
import { FormularioPorteroComponent } from './formulario-portero/formulario-portero.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaPorterosComponent,
    FormularioPorteroComponent
  ],
  imports: [
    CommonModule,
    PorterosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PorterosModule { }
