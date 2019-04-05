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

  ratingClicked: number;
  itemIdRatingClicked: string;

  constructor(private filmData: FilmsService) { }

  ngOnInit() {
    this.filmData.getFilm().subscribe(ghibliData => {
      this.films = ghibliData.map(e => {
        e.rating = '';
        return e;
      })
    })
  }

  ratingComponentClick(clickObj: any): void {
    const item = this.films.find(((i: any) => i.id === clickObj.id));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.title;
    }
  }
}
