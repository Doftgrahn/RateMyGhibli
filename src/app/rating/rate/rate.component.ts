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

  state: any = {
    rated: []
  };
  getRated = localStorage.getItem('rated');

  showRatedinDom() {
    if (this.getRated !== null) {
      this.state.rated = JSON.parse(this.getRated)
      this.films.map(e => {
        e.id = this.state.rated.id;
        e.rating = this.state.rated.rating;
        return e;
      })
    }
  }

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
    localStorage.setItem('Rating', JSON.stringify(this.state.rated));
  }



  ngOnInit() {
    this.showRatedinDom();
    this.filmData.getFilm().subscribe(ghibliData => {
      this.films = ghibliData.map(e => {
        e.rating = '';
        return e;
      })
    })
  }

  constructor(private filmData: FilmsService) { }

  toggleClass(index: number) {          // get index
    this.selectedIndex = index;
  }
}
