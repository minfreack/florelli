import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { ProductstestComponent } from './productstest/productstest.component';

const Subroutes: Routes=[
  {
    path: '',
    component: ProductsModule
  }
]

@NgModule({
  declarations: [ProductsComponent, ProductstestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Subroutes)
  ]
})
export class CatalogueModule { }
