import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  heroes = [
      { id: 11, name: 'Mr. Nice', country: 'India' },
      { id: 12, name: 'Narco' , country: 'USA'},
      { id: 13, name: 'Bombasto' , country: 'UK'},
      { id: 14, name: 'Celeritas' , country: 'Canada' },
      { id: 15, name: 'Magneta' , country: 'Russia'},
      { id: 16, name: 'RubberMan' , country: 'China'},
      { id: 17, name: 'Dynama' , country: 'Germany'},
      { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
      { id: 19, name: 'Magma' , country: 'South Africa'},
      { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
    ];



  constructor() { }
}
