import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue: string = '';

  changesearchValue(eventdata: Event){
    console.log((<HTMLInputElement>eventdata.target).value);
    this.searchValue = (<HTMLInputElement>eventdata.target).value;
  }
}
