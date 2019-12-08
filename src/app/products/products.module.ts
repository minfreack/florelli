import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';


const Subroutes: Routes=[
  {
    path: 'catalogo/producto',
    component: ProductComponent
  },
  {
    path: 'catalogo/producto/:id',
    component: ProductComponent
  }
];  

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Subroutes)
  ]
})
export class ProductsModule { }
