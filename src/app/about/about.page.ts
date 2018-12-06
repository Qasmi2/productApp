import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductService } from '../product.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  product: Product[];
  name: string;
  detail: string;
  response: any;
  products: any;

  constructor(public addproduct: ProductService, private toastCtrl: ToastController) { }

  productForm() {
    this.response = this.addproduct.addProduct(this.name, this.detail).subscribe(response => {
      this.products = response;
    });

  }


  ngOnInit() {
    // this.productForm();
  }

}
