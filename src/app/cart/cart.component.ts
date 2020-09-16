import { HttpClient } from '@angular/common/http';
import { ProductsService } from './../products/products.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private url = './assets/products.json';
  a;
  list: any[];
  listItems;
  itemNum = 0;
  items: boolean;
  constructor(
    private titleService: Title,
    private service: ProductsService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.titleService.setTitle('Cart');
    this.list = this.service.getItemNumber();
    // console.log(this.service.getItemNumber());

    try {
      this.itemNum = this.list.length;
      this.items = true;
    } catch (error) {
      this.items = false;
    }
  }
  deleteItem(id) {
    this.list = this.list.filter((item) => item.id !== id);
    this.itemNum = this.list.length;
    if (this.list.length === 0 || this.list.length === null) {
      this.items = false;
    }
  }
}
