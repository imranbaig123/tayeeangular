import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {id:1, name: 'Microsoft', price:'109', color:'White', available:'Available', image: '/assests/products/microsoft.pjeg'},
    {id:2, name: 'Netflix', price:'199', color:'White', available:'Available', image: '/assests/products/netflix.pjeg'},
    {id:3, name: 'Unity', price:'400', color:'Black', available:'Not Available', image: '/assests/products/unity.pjeg'},
    {id:4, name: 'Google', price:'299', color:'White', available:'Available', image: '/assests/products/google.pjeg'},
    {id:5, name: 'Amazon', price:'159', color:'black', available:'Not Available', image: '/assests/products/amazon.pjeg'}
  ];
}
