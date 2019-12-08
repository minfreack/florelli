import { Injectable } from '@angular/core';
import { ProductsDataSourceService } from './products-data-source.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {
  private products: Product[]=[];
  constructor(private dataSource: ProductsDataSourceService) {
    this.dataSource.getProducts()
    .subscribe((response)=>{
      this.products=response.floreria;
    })
  }
  getProducts():Product[]{
    return this.products;
  }

  getProduct(id:number | string):Product{
    return this.getProducts().find(
      product=>product.id===+id);
  }
}
