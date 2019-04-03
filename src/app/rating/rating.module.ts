import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import {FormsModule} from '@angular/forms';

/*----*/
import { Pipe, PipeTransform } from '@angular/core';



import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [RateComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [RateComponent]
})
export class RatingModule { }
