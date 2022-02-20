import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  isLogIn : boolean = true;
  isLogOut : boolean = false;


  Products = [
    {
      "tmark":"" ,
      "id": "SHL0001",
      "name": "Tshirt",
      "description": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
      "sta" : this.isLogIn
    },
    {
      "tmark":"",
      "id": "SHL0002",
      "name": "Shoes",
      "description": "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
      "sta" : this.isLogIn
    },
    {
      "tmark":"",
      "id": "SHL0003",
      "name": "Handbags",
      "description": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
      "sta" : this.isLogIn
    },
    {
      "tmark":"",
      "id": "SHL0004",
      "name": "Pants",
      "description": "Made of fabric that allow for maximum comfort and ease.",
      "sta" : this.isLogIn
    },
    {
      "tmark":"",
      "id": "SHL0005",
      "name": "Hoodies",
      "description": "Kick back in style with this heavyweight, organic cotton hoodie from Unrecorded. With 9 color options and cozy terry knit fabric, this everyday hoodie is a wardrobe essential.",
      "sta" : this.isLogIn
    },
    {
      "tmark":"",
      "id": "SHL0006",
      "name": "Jackets",
      "description": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
      "sta" : this.isLogOut
    }
  ];

 

  constructor() { }

  ngOnInit(): void {
  }

}
