import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Main Module*/
import {MainModule} from '../main/main.module'; /// will not be a part of it.

/*Add*/
import {AddModule} from '../add/add.module';

/*Rating Module*/




/*Toplist*/


/*About*/


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
