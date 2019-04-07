import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() rating: number;
  @Input() id: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;

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

}
