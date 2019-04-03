import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  searchText: any;
  films;










  constructor(private ds: DataService) {this.films = this.ds.heroes;}

  ngOnInit() { }

}
