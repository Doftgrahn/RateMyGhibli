import { Pipe, PipeTransform } from '@angular/core';

import { Film } from '../shared/film';

@Pipe({
  name: 'Moviefilter'
})

export class FilterPipe implements PipeTransform {

  transform(films: Film[], searchTerm: string): Film[] {
    if (!films || !searchTerm) {
      return films;
    }
    return films.filter(film => {
      film.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  }
}


/*



*/
