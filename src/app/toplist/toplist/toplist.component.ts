import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../shared/films.service';
import { Film } from '../../shared/film';


@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.scss']
})
export class ToplistComponent implements OnInit {

  constructor(private filmData: FilmsService) { }
  
  films: Film[] = [];

  ngOnInit() { 
    this.filmData.getFilm()
    .subscribe(data => this.films = data.sort(function(a, b) {
      return b.rt_score - a.rt_score;
    }).filter((movie,index) => index < 5)
    )
  }

  pictures = ['assets/pics/Only-Yesterday.jpg',
    'assets/pics/The-tale-of-princess-kaguya.jpg',
    'assets/pics/Grave-of-the-Fireflies.jpg',
    'assets/pics/Spirited-Away.jpg',
    'assets/pics/Kikis-Delivery-Service.jpg'
    /*'assets/pics/Castle-in-the-Sky.jpg',
    'assets/pics/ariety.jpg',
    'assets/pics/porco-rosso.jpg',
    'assets/pics/My-Neighbor-Totoro.jpg',
    'assets/pics/Princess-Mononoke.jpg',
    'assets/pics/Ponyo.jpg',
    'assets/pics/When-Marnie-Was-There.jpg',
    'assets/pics/Whisper-of-the-Heart.jpg',
    'assets/pics/The-Cat-Returns.jpeg',
    'assets/pics/the-wind-rises.jpg',
    'assets/pics/Howls-Moving-Castle.jpg',
    'assets/pics/From-up-on-poppy-hill.jpg',
    'assets/pics/Pom-Poko.jpg',
    'assets/pics/My-Neighbors-the-Yamadas.jpeg',
    'assets/pics/Tales-from-Earthsea.jpg'*/
  ];
}

