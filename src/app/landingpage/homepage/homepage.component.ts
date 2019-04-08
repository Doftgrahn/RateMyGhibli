import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
   items: Array<any> = []
  index: number = 1;


  constructor() {



     this.items =[
      {name: 'assets/pics/Princess-Mononoke.jpg'},
      {name: 'assets/pics/the-wind-rises.jpg'},
      {name: 'assets/pics/The-tale-of-princess-kaguya.jpg'},
      {name: 'assets/pics/Whisper-of-the-Heart.jpg'},
      {name: 'assets/pics/Spirited-Away.jpg'},
      {name: 'assets/pics/Kikis-Delivery-Service.jpg'}
    ];

    }

  ngOnInit() {

  }

};
