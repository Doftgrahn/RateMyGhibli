import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo: string = 'assets/pics/logo.png';
  toggle: boolean = false;

  hamburger() {
    this.toggle = !this.toggle;
  }

  toggleOff() {
    this.toggle = false;
  }





  constructor() { }

  ngOnInit() {
  }

}
