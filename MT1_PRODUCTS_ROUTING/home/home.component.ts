import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  t = "T-Shirt";
  s = "Shoes";
  h = "Hand-bag";
  p = "Pants";
  Hoo = "Hoodies";
  j = "Jackets";
  
  constructor() { }

  ngOnInit(): void {
  }

}
