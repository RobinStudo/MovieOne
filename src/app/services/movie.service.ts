import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<any> = [];
  url: string = 'http://localhost:3000/movies/';

  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    return this.http.get(this.url + id);
  }

  search(query: string){
    return this.http.get(this.url + '?q=' + query);
  }

  add(movie: Movie){
    return this.http.post(this.url, movie);
  }
}
