import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Film } from '../film';


@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.scss']
})
export class ToplistComponent implements OnInit {

  constructor(private filmData: FilmsService) { }
 
  filmUrl: Film[] = null;
  films = [];

  sortByRating(films: Film[]): void {
    films.sort(function(a, b) {
      return b.rt_score - a.rt_score;
    });
    this.films = films  
  }



  ngOnInit() { 
    this.filmData.getFilm()
    .subscribe(data => this.films = data);
  }
  
  getFilms() {
    this.filmData.getFilm()
    .subscribe( film => {this.filmUrl = film;  console.log(this.filmUrl);} )
  }
}

