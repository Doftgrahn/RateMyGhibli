import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {


  public getRouterOuletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  
}
