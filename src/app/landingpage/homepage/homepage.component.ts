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
  {url:'assets/pics/Howls-Moving-Castle.jpg',
  name: 'Houes moving Castle'},
  {url:'assets/pics/The-tale-of-princess-kaguya.jpg',
  name: 'The tale of pringcess kaguya'},
  {url:'assets/pics/Grave-of-the-Fireflies.jpg',
  name: 'Grave of the fireflies'},
  {url:'assets/pics/Spirited-Away.jpg',
  name: 'Spirited away'},
  {url:'assets/pics/Kikis-Delivery-Service.jpg',
  name: 'Kikis deliery service'},
  {url:'assets/pics/Castle-in-the-Sky.jpg',
  name: 'Castle in the sky'},
  {url:'assets/pics/ariety.jpg',
  name: 'Ariety'},
  {url:'assets/pics/porco-rosso.jpg',
  name: 'Porco rosso'},
  {url:'assets/pics/My-Neighbor-Totoro.jpg',
  name: 'My neighbor totorog'},
  {url:'assets/pics/the-wind-rises.jpg',
  name: 'Kikis deliery service'},
  {url:'assets/pics/When-Marnie-Was-There.jpg',
  name: 'Kikis deliery service'},
  {url:'assets/pics/Whisper-of-the-Heart.jpg',
  name: 'Kikis deliery service'},
  {url:'  assets/pics/My-Neighbors-the-Yamadas.jpeg',
  name: 'Kikis deliery service'},
  {url:'assets/pics/Tales-from-Earthsea.jpg',
  name: 'Kikis deliery service'},
  {url:'assets/pics/Princess-Mononoke.jpg',
  name: 'Kikis deliery service'}
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
