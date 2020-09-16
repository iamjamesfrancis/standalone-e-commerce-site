import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  id: number;

  setId(id) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
}
