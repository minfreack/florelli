import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { Compra } from './compra';
import { Arreglo } from './arreglo';
@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {
  flowersList: AngularFireList<any>;
  comprasList: AngularFireList<any>
  constructor(private fire: AngularFireDatabase) {}

  getData(){
    this.flowersList=this.fire.list('arreglos');
    this.comprasList=this.fire.list('compras');
    return this.flowersList;
  }
  agregarArreglo(flower: Arreglo){
    this.flowersList.push(flower);
  }
  updateArreglo(flower: Arreglo){
    this.flowersList.update(flower.id, flower);
  }
  deleteArreglo(id: string){
    this.flowersList.remove(id);
  }
  insertCompra(compra: Compra){
    this.comprasList.push(compra);
  }
}
