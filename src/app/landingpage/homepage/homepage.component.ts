import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
   items: Array<any> = []
   image: Array<any> = []


  constructor() {

this.image = [
  {url:'assets/pics/Howls-Moving-Castle.jpg'},
  {url:'assets/pics/The-tale-of-princess-kaguya.jpg'},
  {url:'assets/pics/Grave-of-the-Fireflies.jpg'},
  {url:'assets/pics/Spirited-Away.jpg'},
  {url:'assets/pics/Kikis-Delivery-Service.jpg'},
  {url:'assets/pics/Castle-in-the-Sky.jpg'},
  {url:'assets/pics/ariety.jpg'},
  {url:'assets/pics/porco-rosso.jpg'},
  {url:'assets/pics/My-Neighbor-Totoro.jpg'},
  {url:'assets/pics/the-wind-rises.jpg'},
  {url:'assets/pics/When-Marnie-Was-There.jpg'},
  {url:'assets/pics/Whisper-of-the-Heart.jpg'},
  {url:'  assets/pics/My-Neighbors-the-Yamadas.jpeg'},
  {url:'assets/pics/Tales-from-Earthsea.jpg'},
  {url:'assets/pics/Princess-Mononoke.jpg'}
];

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
