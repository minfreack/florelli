import { Component, OnInit } from '@angular/core';
import { Arreglo } from '../arreglo';
import { FirebaseApiService } from '../firebase-api.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  arreglos:Arreglo[]=[];
  private p: number=1;
  sellFormBuilder=this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      telefono: ['', [ Validators.min(8)], Validators.pattern['0-9']],
    });
  constructor(private fire:FirebaseApiService, private fb: FormBuilder) { }

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

  comprar(){
    this.fire.insertCompra(this.sellFormBuilder.value);
  }

  get nombre(){
    return this.sellFormBuilder.get('nombre');
  }
  get direccion(){
    return this.sellFormBuilder.get('direccion');
  }
  get email(){
    return this.sellFormBuilder.get('email');
  }
  get telefono(){
    return this.sellFormBuilder.get('telefono');
  }


}
