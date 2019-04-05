import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReviewComponent } from './add-review/add-review.component';
import { FormControl, Validators, AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShowReviewComponent } from './add-review/show-review/show-review.component';

@NgModule({
  declarations: [AddReviewComponent, ShowReviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class AddModule { }
