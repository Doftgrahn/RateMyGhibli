import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  inputName: string;

  @Input() rating: number;
  @Input() id: string;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();



  ngOnInit() {
    this.inputName = this.id + '_rating';
  }

  onClick(rating: number) {
    this.rating = rating;
    this.ratingClick.emit({
      id: this.id,
      rating: rating,
    })
  }

  resetRating() { this.onClick(null); }
  
}
