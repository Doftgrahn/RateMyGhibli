import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from '../shared/filter.pipe';
import { StarsComponent } from './rate/stars/stars.component';

/*----*/

@NgModule({
  declarations: [RateComponent, FilterPipe, StarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [RateComponent]
})
export class RatingModule { }
