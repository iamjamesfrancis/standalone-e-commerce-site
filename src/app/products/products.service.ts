import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  itemNumber: [];
  whishListItem: [];
  constructor() {}
  setItemNumber(item) {
    this.itemNumber = item;
  }
  getItemNumber() {
    return this.itemNumber;
  }
  setWhishlist(item) {
    this.whishListItem = item;
  }
  getWhishlist() {
    return this.whishListItem;
  }
}
