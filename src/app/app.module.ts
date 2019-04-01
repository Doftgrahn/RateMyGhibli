/*General stuff from @angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*Modules*/
import { RatingModule } from './rating/rating.module';
import { MainModule } from './main/main.module';

/*Import Routing, DataService*/
import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainModule,
    RatingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
