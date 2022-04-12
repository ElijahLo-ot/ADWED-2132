import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    //animation trigger go here
    trigger('openClose', [
      state('open', style({
        height: '800px',
        opacity: 1,
        backgroundColor: '#dac292'
      })),
      state('close', style({
        height: '20px',
        opacity: 0.5,
        backgroundColor: '#c4b7a6'
      })),
      transition('open => closed',[
        animate('2s ease-out')
      ]),
      transition('closed => open',[
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  isOpen = true;

  toogle()  {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
