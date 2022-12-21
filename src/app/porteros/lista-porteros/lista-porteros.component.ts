import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-porteros',
  templateUrl: './lista-porteros.component.html',
  styleUrls: ['./lista-porteros.component.css']
})
export class ListaPorterosComponent implements OnInit {

  porteros: any[] = [];


  constructor(
    private firebase: FirebaseService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(
      (params: any) => {
        if(params['mes']){
          this.obtenerMes(params['mes'])
        }
        else{
          this.listarTodos();
        }
      }
    )
  }

  //Filtramos los registros por mes
  obtenerMes(mes: string){
    this.firebase.obtenerMes(mes).subscribe( (resp: any) =>{
      this.porteros = [];
      resp.forEach((porteroData: any) =>{
        console.log(porteroData);
        this.porteros.push({
          id: porteroData.payload.doc.id,
          data: porteroData.payload.doc.data()
        })
      });
    })
  }

  //Presentamos todos los registros de la BBDD. 
  listarTodos(): void{
    this.firebase.listarTodos().subscribe(
      (resp: any) => {
        this.porteros = [];
        resp.forEach((porteroData: any) =>{
          console.log(porteroData);
          this.porteros.push({
            id: porteroData.payload.doc.id,
            data: porteroData.payload.doc.data()
          })
        });
      }
    )    
  }

  //Borramos el registro con el id que le suministremos. 
  borrar(id: string): void{
    this.firebase.borrar(id);
    alert("Portero Eliminado.");
    console.log("Portero Eliminado.");
  }
}
