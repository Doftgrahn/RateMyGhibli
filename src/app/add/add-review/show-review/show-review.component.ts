import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.scss']
})
export class ShowReviewComponent implements OnInit {
  @Input() comments;


  constructor() { }

  ngOnInit() {

  }


}
