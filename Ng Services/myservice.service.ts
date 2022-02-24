import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = "Service Created";
  
  constructor() { }

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
  allProducts(){
    return [
      {
        "pic":"/assets/tshirt.jpg" ,
        "id": "SHL0001",
        "name": "Tshirt",
        "description": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
       
      },
      {
        "pic":"/assets/shoes.jpg",
        "id": "SHL0002",
        "name": "Shoes",
        "description": "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
        
      },
      {
        "pic":"/assets/handbag.jpg",
        "id": "SHL0003",
        "name": "Handbags",
        "description": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
        
      },
      {
        "pic":"/assets/pants.jpg",
        "id": "SHL0004",
        "name": "Pants",
        "description": "Made of fabric that allow for maximum comfort and ease.",
        
      },
      {
        "pic":"/assets/hoodies.jpg",
        "id": "SHL0005",
        "name": "Hoodies",
        "description": "Kick back in style with this heavyweight, organic cotton hoodie from Unrecorded. With 9 color options and cozy terry knit fabric, this everyday hoodie is a wardrobe essential.",
        
      },
      {
        "pic":"/assets/jacket.jpg",
        "id": "SHL0006",
        "name": "Jackets",
        "description": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
        
      }
    ]
  }
}


