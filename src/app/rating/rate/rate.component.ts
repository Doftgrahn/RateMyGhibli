import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../shared/films.service';
import { Film } from '../../shared/film';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  searchText: Film[];
  films: Film[] = [];


  constructor(private filmData: FilmsService) { }

  ngOnInit() {
    this.filmData.getFilm().subscribe(ghibliData => {
      this.films = ghibliData
    })
  }
}
