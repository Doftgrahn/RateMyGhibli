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

  reviewForm: FormGroup = new FormGroup({
		movieTitleControl: new FormControl('', [Validators.required, Validators.minLength(2)]),
		releaseYearControl: new FormControl('', [Validators.required, this.isNumber, Validators.minLength(4), Validators.maxLength(4)]),
    commentFieldControl: new FormControl('',[Validators.required]),
    usersNameControl: new FormControl('', [Validators.required])
		}
	);
  movieTitleControl: AbstractControl;
  releaseYearControl: AbstractControl;
  commentFieldControl: AbstractControl;
  usersNameControl: AbstractControl;


  showWhatUserWrote() {
    this.formContent.title = this.movieTitleControl.value,
    this.formContent.year = this.releaseYearControl.value,
    this.formContent.comment =  this.commentFieldControl.value,
    this.formContent.username = this.usersNameControl.value,
    localStorage.setItem(this.formContent, JSON.stringify(this.formContent));
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.movieTitleControl = this.reviewForm.controls['movieTitleControl'];
		this.releaseYearControl = this.reviewForm.controls['releaseYearControl'];
    this.commentFieldControl = this.reviewForm.controls['commentFieldControl'];
    this.usersNameControl = this.reviewForm.controls['usersNameControl'];

    this.reviewForm = this.formBuilder.group({
      movieTitleControl: [null, [Validators.required, Validators.minLength(2)]],
      releaseYearControl: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      commentFieldControl: [null,[Validators.required]],
      usersNameControl: [null,[Validators.required]]
    });
  }

  isNumber(x: any) {
     let regex = /^[0-9]+$/;
     if (!x.value.trim().match(regex)) {
       return { isNumber: true };
     }
     return null;
   }

}
