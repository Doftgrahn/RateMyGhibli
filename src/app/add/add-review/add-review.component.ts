import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  formContent: object = {
    title: '',
    year: '',
    comment: '',
    username: ''
  };

  reviewForm: FormGroup = new FormGroup({
		movieTitleControl: new FormControl('', [Validators.required, Validators.minLength(2)]),
		releaseYearControl: new FormControl('', [Validators.required, this.isNumber]),
    commentFieldControl: new FormControl('',[Validators.required]),
    usersNameControl: new FormControl('', [Validators.required])
		}
	);
  movieTitleControl: AbstractControl;
  releaseYearControl: AbstractControl;
  commentFieldControl: AbstractControl;
  usersNameControl: AbstractControl;


  showWhatUserWrote() {
    console.log(this.movieTitleControl.value);
    this.formContent.title = this.movieTitleControl.value;
    this.formContent.year = this.releaseYearControl.value,
    this.formContent.comment =  this.commentFieldControl.value,
    this.formContent.username = this.usersNameControl.value
  }

  constructor() { }

  ngOnInit() {
    this.movieTitleControl = this.reviewForm.controls['movieTitleControl'];
		this.releaseYearControl = this.reviewForm.controls['releaseYearControl'];
    this.commentFieldControl = this.reviewForm.controls['commentFieldControl'];
    this.usersNameControl = this.reviewForm.controls['usersNameControl'];
  }

  isNumber(x: string) {
     let regex = /^[0-9]+$/;
     if (!x.value.trim().match(regex)) {
       return { isNumber: true };
     }
     return null;
   }

}
