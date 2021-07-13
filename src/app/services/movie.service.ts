import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compareTwoStrings } from 'string-similarity';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<any> = [];
  url: string = 'http://localhost:3000/movies';

  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    for(let movie of this.movies){
      if(movie.id == id){
        return movie;
      }
    }
  }

  search(query: string){
    let results = [];
    query = query.toLowerCase();

    for(let movie of this.movies){
      const title = movie.title.toLowerCase();
      
      if(title.indexOf(query) >= 0){
        results.push(movie);
      }else if(compareTwoStrings(title, query) >= 0.5){
        results.push(movie);
      }
    }

    return results;
  }
}
