import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.scss']
})
export class ShowReviewComponent implements OnInit {
  @Input() reviewInfo: object = {
    title: '',
    year: '',
    comment: '',
    username: ''
  };

  //let comment = JSON.parse(localStorage.getItem(this.reviewInfo));

  constructor() { }

  ngOnInit() {
  }


}
