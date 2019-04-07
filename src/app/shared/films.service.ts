import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  http: HttpClient = null;
	url: string = 'https://ghibliapi.herokuapp.com/films';

	constructor(http: HttpClient) {
		this.http = http;
	}

	getFilm(): Observable<Film[]>{
		return this.http.get<Film[]>(this.url);
  }

  
}
