import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private fb: AngularFirestore
  ) { }

  //Metodo que nos extrae todos los registros de la BBDD
  listarTodos(): Observable<any>{
    return this.fb.collection("porteros").snapshotChanges();
  }

  //Metodo que nos extrae solo un registros de la BBDD
  listarUno(documentId: string): Observable<any>{
    return this.fb.collection("porteros").doc(documentId).snapshotChanges();
  }

  //Metodo que actualiza el registro que deseemos con nuevos datos
  actualizar(documentId: string, data: any){
    return this.fb.collection("porteros").doc(documentId).update(data);
  }

  //Metodo que crea un portero nuevo
  nuevo(data: any){
    return this.fb.collection("porteros").add(data);
  }

  //Metodo para borrar un portero
  borrar(documentId: string): void{
    this.fb.collection("porteros").doc(documentId).delete();
  }

  obtenerMes(mes: string){
    return this.fb.collection('porteros', 
    ref => ref.where('mesDisponible', '==', mes)). snapshotChanges();
  }
}
