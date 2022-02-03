// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Interpolation Demo';
 

//   // header1 = 'Number Interpolation';
// // String Interpolatiion
//  appName = 'ADWEB  Interpolation Demonstration!';

//  // property binding Elijah lo-ot
// clientName:boolean = false;

// // numeric binding Elijah lo-ot
//   n1 = 70
//   n2 = 30
//   sum = 0
//   diff = 0
//   quo = 0
//   prod = 0




// //class binding
// appliedCSSClass = "green";
// notappliedSSClass = "false";
// myColor = 'red';

// //Two-way data binding Elijah lo-ot

// showData($event:any){
//   console.log("Button is Clicked!");
// }

// //keyup function Elijah lo-ot
// getMessage(msg:any){
//   alert(msg)
// }



// //Console Warning

// // getData(data:any){
// //   console.warn(data)
// // } 

// //two way data binding

// studName=""
// prelim=0
// midterm=0
// final=0
// average = (this.prelim + this.midterm + this.final)/3

// }

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolition Demo';

  //String Interpolation
  appName = 'ADWEB Interpolation Demonstration!';




  //Property Binding
  clientName:boolean = false;

  //Numeric

  n1 = 70;
  n2 = 30;
  sum = 0;
  qou = 0;
  prod = 0;
  diff = 0;

  //clientName:string = "Jeffrey";

  appliedCSSClass = "green";
  notappliedCSSClass = false;
  myColor = 'red';

  showData($event:any){
    console.log("Button is Clicked!");
  }

  getData(data:any){
    console.warn(data)
  }

  //Two way data binding
  studName=""
  subj=""
  prelim=0
  midterm=0
  final=0
  average = (this.prelim + this.midterm + this.final)/3

}