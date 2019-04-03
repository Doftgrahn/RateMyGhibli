import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplistComponent } from './toplist/toplist.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ToplistComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ToplistModule { }
