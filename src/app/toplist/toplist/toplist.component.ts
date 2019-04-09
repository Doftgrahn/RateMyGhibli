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
    }).filter((movie,index) => index < 5))
  }


  pictures = ['assets/pics/Only-Yesterday.jpg',
    'assets/pics/The-tale-of-princess-kaguya.jpg',
    'assets/pics/Grave-of-the-Fireflies.jpg',
    'assets/pics/Spirited-Away.jpg',
    'assets/pics/Kikis-Delivery-Service.jpg'
  ];

}
