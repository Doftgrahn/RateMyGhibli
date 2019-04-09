import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  formContent: any = {
    title: '',
    year: '',
    comment: '',
    username: ''
  };

  movieTitleControl: AbstractControl;
  releaseYearControl: AbstractControl;
  commentFieldControl: AbstractControl;
  usersNameControl: AbstractControl;


  showWhatUserWrote() {
    this.formContent.title = this.movieTitleControl.value
    this.formContent.year = this.releaseYearControl.value
    this.formContent.comment =  this.commentFieldControl.value
    this.formContent.username = this.usersNameControl.value
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(this.formContent);
    localStorage.setItem('comments', JSON.stringify(comments));
  }


      reviewForm = this.formBuilder.group({
        movieTitleControl: [null, [Validators.required, Validators.minLength(2)]],
        releaseYearControl: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        commentFieldControl: [null,[Validators.required]],
        usersNameControl: [null,[Validators.required]]
      });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.movieTitleControl = this.reviewForm.get('movieTitleControl');
		this.releaseYearControl = this.reviewForm.get('releaseYearControl');
    this.commentFieldControl = this.reviewForm.get('commentFieldControl');
    this.usersNameControl = this.reviewForm.get('usersNameControl');


  }

  isNumber(x: any) {
     let regex = /^[0-9]+$/;
     if (!x.value.trim().match(regex)) {
       return { isNumber: true };
     }
     return null;
   }

}
