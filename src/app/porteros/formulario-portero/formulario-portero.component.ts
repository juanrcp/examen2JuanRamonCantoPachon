import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-portero',
  templateUrl: './formulario-portero.component.html',
  styleUrls: ['./formulario-portero.component.css']
})
export class FormularioPorteroComponent implements OnInit {

  nuevaPortero: boolean = false;

  //Declaramos formulario
  formulario = this.fb.group({
    nombreCompleto:[''], 
    ciudad:[''],
    telefono:[''],
    mail:[''],
    mesDisponible:['']
  });

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: FirebaseService,
    private location: Location
  ) { }

  //Comprobamos la ruta, si nos llega algun id rellenamos el formulario con los datos 
  //recogidos y si no nos llega ningun id dejamos el formulario vacio. 
  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get('id')){
      this.nuevaPortero = false;
      let id = String(this.ruta.snapshot.paramMap.get('id'));

      this.fire.listarUno(id).subscribe(resp => {
        console.log(resp.payload.data());
        this.formulario.setValue({...resp.payload.data()});
      });
    }else{
      this.nuevaPortero = true;
      console.log(this.formulario.value);
    }
  }

  //Metodo para implementar el guardado y la actualizacion, de manera que si 
  //recibo algun id en la URL actualizare el registro correspondiente y si no creo uno nuevo.
  guardar(): void{
    if(this.nuevaPortero){
      this.fire.nuevo(this.formulario.value).then(
        () => {alert("Nuevo Portero Creado.");},
        (error) => {
          console.log(error);
        }
      );
      
    }else{
      let id = String(this.ruta.snapshot.paramMap.get("id"));
      console.warn(this.formulario.value);
      this.fire.actualizar(id, this.formulario.value).then(
        () => {
          console.log("Portero modificado.");
          alert("Portero modificado.");
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }

  //Metodo para volver a la posicion anterior 
  volver(): void{
    this.location.back();
  }


}
