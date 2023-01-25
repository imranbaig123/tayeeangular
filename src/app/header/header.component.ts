import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slogan: string = 'your one stop shop for everything.'
  source: string = "/assets/eshopping.avif";
  getSlogan(){
    return 'online is everything'
  }

}
