import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../shared/films.service';
import { Film } from '../../shared/film';

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
  getRated: any;
  state: any = {
    rated: []
  };
  parsedItems: any;


  ratingComponentClick(clickObj: any): void {
    const item = this.films.find(((i: any) => i.id === clickObj.id));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.title;
    }
    this.state.rated.push({
      id: clickObj.id,
      rating: clickObj.rating
    })
    localStorage.setItem('rating', JSON.stringify(this.state.rated));
  }


  ngOnInit() {
    this.getRated = localStorage.getItem('rating');
    this.parsedItems = JSON.parse(this.getRated);

    this.filmData.getFilm().subscribe(ghibliData => {
      this.films = ghibliData.map(e => {

        let oldRating = this.parsedItems.find(function(item: any) {
          return item.id === e.id;
        });

        oldRating ? e.rating = oldRating.rating : e.rating = '';

        return e;
      })
    })
  }

  constructor(private filmData: FilmsService) { }


}
