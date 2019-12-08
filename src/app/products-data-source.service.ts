import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataSourceService {

  constructor(private http:HttpClient) {

  }
  getProducts():any{
    return this.http.get('./assets/floreria.json')
  }
}
