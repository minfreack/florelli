import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService } from '../products-repository.service';
import { FirebaseApiService } from '../firebase-api.service';
import { Arreglo } from '../arreglo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  arreglos: Arreglo[]=[];
  constructor(private productsRepository: ProductsRepositoryService, private fire: FirebaseApiService) { }
  data:any={
    id: <string><unknown>Date.now() 
  };
  ngOnInit() {
    var x=this.fire.getData();
    x.snapshotChanges().subscribe(item =>{
      this.arreglos=[];
      item.forEach(element =>{
        var y=element.payload.toJSON();
        y["id"]=element.key;
        this.arreglos.push(y as Arreglo);
      })
    })
  }
  public verDatos(c){
    this.data=Object.assign({},c);
  }
  onSubmit(){
    this.fire.agregarArreglo(this.data);
  }
  onEdit(){
    this.fire.updateArreglo(this.data);
  }
  onDelete(id:string){
    this.fire.deleteArreglo(id);
  }
}
