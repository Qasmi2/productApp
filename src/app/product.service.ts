
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urls: string;
  body = {
    name: '',
    detail: ''
  }
  responsone: any;
  constructor(private http: HttpClient) { }
  // get HTTP Request
  getProducts() {
    return this.http.get('http://192.168.0.109/ionicapis/public/api/products');
  }
  // post HTTP Request
  addProduct(name: string, detail: string) {
    //body
    this.body.name = name;
    this.body.detail = detail;
    return this.http.post('http://192.168.0.109/ionicapis/public/api/products', this.body);
    // .subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);

    // });

  }
} 
