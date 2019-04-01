import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [RateComponent, WatchlistComponent],
  imports: [
    CommonModule
  ],
  exports: [RateComponent, WatchlistComponent]
})
export class RatingModule { }
