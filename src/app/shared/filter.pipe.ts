import { Pipe, PipeTransform } from '@angular/core';

import { Film } from '../shared/film';

@Pipe({
  name: 'Moviefilter'
})

export class FilterPipe implements PipeTransform {

  transform(films: Film[], filterData: string): Film[] {
    if (!films) return [];
    if (!filterData) return films;
    filterData = filterData.toString().toLowerCase();
    return films.filter(movie => {
      return movie.title.toLowerCase().includes(filterData)
    })
  }
}
