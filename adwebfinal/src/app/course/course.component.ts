import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'EMERGE blog 1','description':'Welcome to the first in a series of blogs from partners in the EMERGE project on work with men and boys for gender equality.','image':'../../assets/ge1.jpg'},
    {'id':2,'name':'EMERGE blog 2','description':'This blog is the second in a series of blogs from partners in the EMERGE project on work with men and boys for gender equality.','image':'../../assets/ge2.jpg'},
    {'id':3,'name':'EMERGE blog 3','description':'In this third blog in the EMERGE series, Erin Stern discusses the work of Kembatti Mentti Gezzimma in Ethiopia..','image':'../../assets/ge3.jpg'},
    {'id':4,'name':'EMERGE blog 3','description':'In the fourth EMERGE blog, Alexa Hassink describes the successes, challenges and complexities behind the MenCare ..','image':'../../assets/ge4.jpg'},
  ]
}
