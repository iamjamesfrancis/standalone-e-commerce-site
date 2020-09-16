import { Title } from '@angular/platform-browser';
import { ProductsService } from './../products/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css'],
})
export class WhishlistComponent {
  a;
  list: any[];
  listItems;
  itemNum = 0;
  items: boolean;
  constructor(private service: ProductsService, private titleService: Title) {
    this.titleService.setTitle('Whishlist');
  }
  ngOnInit() {
    this.list = this.service.getWhishlist();
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
    if (this.list.length === 0) {
      this.items = false;
    }
  }
}
