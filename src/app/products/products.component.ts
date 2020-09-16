import { DetailsService } from './../details/details.service';
import { Title } from '@angular/platform-browser';
import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  private url = './assets/products.json';

  items = [];
  search = '';
  cart: string;
  list: Cart[];
  whishlist: Whishlist[];
  disabled: boolean;
  whishlist_add: boolean;
  hai = [];
  itemName = '';
  stocks: boolean;

  constructor(
    private http: HttpClient,
    private service: ProductsService,
    private titleService: Title,
    private historyService: DetailsService
  ) {}
  ngOnInit() {
    this.stocks = true;
    this.list = [];
    this.whishlist = [];
    this.service.setItemNumber(null);
    this.service.setWhishlist(null);
    this.whishlist_add = false;
    this.titleService.setTitle('Home Page');
    this.list = [];
    this.http

      .get(this.url)
      .toPromise()
      .then((data) => {
        for (let key in data)
          if (data.hasOwnProperty(key)) this.items.push(data[key]);
      });
  }
  addCart(
    num: any,
    name: any,
    price: any,
    weight: any,
    src: any,
    quantity: any
  ) {
    let newItem: Cart = {
      id: num,
      name: name,
      price: price,
      weight: weight,
      src: src,
    };
    this.whishlist.push(newItem);
    this.service.setItemNumber(this.whishlist);
    // console.log(this.whishlist.length);
    // console.log('ID' + this.items[num].id);

    if (this.whishlist.length == quantity && this.items[num].id - 1 === num) {
      this.itemName = this.items[num - 1].name;
      this.stocks = false;
    }
  }
  addWhishList(
    num: any,
    name: any,
    price: any,
    weight: any,
    src: any,
    quantity: any
  ) {
    let newItem: Cart = {
      id: num,
      name: name,
      price: price,
      weight: weight,
      src: src,
    };
    this.list.push(newItem);
    this.service.setWhishlist(this.list);
  }

  searchItem() {
    // console.log(this.search.length);

    if (this.search.length !== 0) {
      this.items = this.items.filter((res) => {
        return (
          res.name.toLowerCase().match(this.search.toLowerCase()) ||
          res.weight.toLowerCase().match(this.search.toLowerCase())
        );
      });
    } else {
      this.ngOnInit();
    }
  }
}

export interface Cart {
  id: any;
  name: any;
  price: any;
  weight: any;
  src: any;
}
export interface Whishlist {
  id: any;
  name: any;
  price: any;
  weight: any;
  src: any;
}
