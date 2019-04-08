import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../../shared/films.service'; /* Service */

import { Film } from '../../shared/film';    /* Interfaces */
import { Rate } from '../../shared/rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})

export class RateComponent implements OnInit {
  selectedIndex: number;
  searchText: Film[];       /*For Search*/
  films: Film[] = [];      /*Get Film*/
  ratingClicked: Film[];
  itemIdRatingClicked: string;

  state = {
    rated: [null]
  };


  ratingComponentClick(clickObj: any): void {
    const item = this.films.find(((i: any) => i.id === clickObj.id));
    if (!!item) {
      // There is a Ghibli movie with this id (this.films)
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.title;
    }

    if (this.state.rated.find(rating => rating.id === clickObj.id)) {
      this.state.rated.forEach(r => {
        if (r.id === clickObj.id) {
          r.rating = clickObj.rating;
        }
      })
    } else {
      // There is no rating for clickObj.id  (this.state.rated)
      this.state.rated.push({
        id: clickObj.id,
        rating: clickObj.rating
      })
    }
    localStorage.setItem('rating', JSON.stringify(this.state.rated));
  }

  ngOnInit() {
    let playList: string = localStorage.getItem('rating');
    if (!playList) {
      // playlist är undefined, dvs det finns inget i localStorage
      this.setupLocalStorage()
      playList = '[]';
    }
    const parsedItems: Rate[] = JSON.parse(playList);
    this.state.rated = parsedItems;
    this.filmData.getFilm().subscribe(ghibliData => {
      this.films = ghibliData.map(e => {
        let oldRating: Rate = parsedItems.find(function(item: Rate) {
          return item.id === e.id;
        });
        oldRating ? e.rating = oldRating.rating : e.rating = '';
        return e;
      })
    })
  }

  setupLocalStorage() {
    localStorage.setItem('rating', JSON.stringify(this.state.rated))
  }


  constructor(private filmData: FilmsService) { }


}
