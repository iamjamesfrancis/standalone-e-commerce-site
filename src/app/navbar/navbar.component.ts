import { DetailsService } from './../details/details.service';
import { HttpClient } from '@angular/common/http';
// import { ProductsComponent } from './../products/products.component';
import { ProductsService } from './../products/products.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private url = './assets/products.json';
  items = [];
  show: boolean;
  constructor(
    private titleService: Title,
    private id: DetailsService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.titleService.setTitle('Home Page');
    this.http

      .get(this.url)
      .toPromise()
      .then((data) => {
        for (let key in data)
          if (data.hasOwnProperty(key)) this.items.push(data[key]);
        if (
          this.id.getId() !== undefined &&
          this.id.getId() === this.id.getId()
        ) {
          this.show = true;
        }
      });
  }
}
