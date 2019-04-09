import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from '../landingpage/homepage/homepage.component';
import { AddReviewComponent } from '../add/add-review/add-review.component';
import { RateComponent } from '../rating/rate/rate.component';

import { ToplistComponent } from '../toplist/toplist/toplist.component';
import { AboutComponent } from '../about/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'review', component: AddReviewComponent },
  { path: 'rating', component: RateComponent },
  { path: 'topList', component: ToplistComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
