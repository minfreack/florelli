import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsRepositoryService } from 'src/app/products-repository.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:string;
  product:Product;
  constructor(private route:ActivatedRoute, private productsRepository:ProductsRepositoryService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.product=this.productsRepository.getProduct(this.id);
    console.log(this.productsRepository.getProduct(this.id));
  }

}
