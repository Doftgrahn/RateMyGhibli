/*--General stuff from @angular
--*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
Import Routing, DataService
--*/
import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
