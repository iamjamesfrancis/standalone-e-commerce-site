import { ProductsService } from './../products/products.service';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from './../details/details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  private url = './assets/products.json';

  items = [];
  itemNum = 0;
  list = [];
  constructor(
    private cart: ProductsService,
    private http: HttpClient,
    private titleService: Title
  ) {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        for (let key in data)
          if (data.hasOwnProperty(key)) this.items.push(data[key]);
        this.titleService.setTitle('Shopping History');
        // localStorage.setItem('history', JSON.stringify(this.items[0]));
      });
  }

  ngOnInit() {
    this.cart.setWhishlist(null);
    this.cart.setItemNumber(null);
    // console.log(JSON.parse(localStorage.getItem('history')).name);
  }
}
