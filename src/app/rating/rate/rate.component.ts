import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../../shared/films.service';

import { Film } from '../../shared/film';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  searchText: any;
  films: Film[] = [];


  constructor(private filmData: FilmsService) { }

  ngOnInit() {
    this.filmData.getFilm().subscribe(data => {
      this.films = data.sort((a, b) => {
        return b.release_date - a.release_date;
      })
    })
  }

}
