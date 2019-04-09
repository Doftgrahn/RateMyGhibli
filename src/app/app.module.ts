/*--General stuff from @angular
--*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*--
Modules to import
--*/

import { MainModule } from './main/main.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { RatingModule } from './rating/rating.module';
import { AboutModule } from './about/about.module';
import { AddModule } from './add/add.module';
import { ToplistModule } from './toplist/toplist.module';

/*--
Import Routing, DataService and pipe
--*/

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { FilmsService } from './shared/films.service';
import { ForofourComponent } from './forofour/forofour.component';



@NgModule({
  declarations: [
    AppComponent,
    ForofourComponent,
  ],
  imports: [
    MainModule,
    LandingpageModule,
    RatingModule,
    AddModule,
    AboutModule,
    ToplistModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
