import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ToplistComponent } from './toplist/toplist.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [LandingpageComponent, ToplistComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [LandingpageComponent, ToplistComponent, AboutComponent,
  ]
})
export class MainModule { }
