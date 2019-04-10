import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
     Ng2CarouselamosModule
  ]
})
export class LandingpageModule {}
