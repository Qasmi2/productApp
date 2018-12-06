import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../Models/product';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  products: any;
  constructor(public getdata: ProductService) {
  }
  getProductFromServices(): void {
    this.getdata.getProducts().subscribe(response => {
      this.products = response;
    });
  }


  ngOnInit() {
    this.getProductFromServices();
  }

}
