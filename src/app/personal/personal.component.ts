import { ProductsService } from './../products/products.service';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent {
  firstName = '';
  lastName = '';
  email = '';
  property: boolean;
  bool: boolean;

  constructor(private titleService: Title, private remove: ProductsService) {
    this.titleService.setTitle('Personal Information');
  }
  ngOnInit() {
    this.remove.setWhishlist(null);
    this.remove.setItemNumber(null);
    this.firstName = localStorage.getItem('firstName').toString();
    this.lastName = localStorage.getItem('lastName').toString();
    this.email = localStorage.getItem('email');
    this.bool = true;
    this.property = true;
  }
  save() {
    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);
    localStorage.setItem('email', this.email);
    this.bool = true;
    this.property = true;
  }
  edit() {
    this.property = false;
    this.bool = false;
  }
  details() {
    localStorage.getItem('firstName');
    localStorage.getItem('lastName');
    localStorage.getItem('email');
  }
}
