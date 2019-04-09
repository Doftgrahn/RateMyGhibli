import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
members: Array<any> = [];
  constructor() {
this.members = [
  {image:'assets/profile_pic/Kampis.jpg', name:'Kmaphol Taeng-Iam', git:'https://github.com/kamphol23', mail:'kamphol_23@hotmail.se', linkedin:'https://www.linkedin.com/in/kamphol-taeng-iam-759627173/' },
  {image:'assets/profile_pic/Olga.jpg', name:'Olga Tselyuk', git:'', mail:'', linkedin:'https://www.linkedin.com/in/olga-tselyuk-243456104/' },
  {image:'assets/profile_pic/Simon.jpeg', name:'Simon Grahn', git:'https://github.com/Doftgrahn', mail:'', linkedin:'https://www.linkedin.com/in/simon-grahn-06994797/' },
  {image:'assets/profile_pic/Ieva.jpg', name:'Ieva', git:'https://github.com/eiwulia', mail:'', linkedin:'https://www.linkedin.com/in/ieva-lundin-bba94a171/' }
];
}
  ngOnInit() {
  }

}
