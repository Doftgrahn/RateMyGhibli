import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from '../shared/app-routing.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
  ]
})
export class LandingpageModule { }
