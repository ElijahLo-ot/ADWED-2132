import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  f = "France";
  k = "Korea";
  sf = "San Francisco";
  b = "Boston";
  

  constructor() { }

  ngOnInit(): void {
  }

}
