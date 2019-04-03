import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  reviewForm: FormGroup = new FormGroup({
		movieTitleControl: new FormControl('Leon', [Validators.required, Validators.minLength(1)]),
		releaseYearControl: new FormControl([Validators.required]),
    commentFieldControl: new FormControl([Validators.required]),
    usersNameControl: new FormControl([Validators.required])
		}
	);
  movieTitleControl: AbstractControl;
  releaseYearControl: AbstractControl;
  commentFieldControl: AbstractControl;
  usersNameControl: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
