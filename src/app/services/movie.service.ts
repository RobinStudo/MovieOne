import { Injectable } from '@angular/core';
import { compareTwoStrings } from 'string-similarity';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<any> = [];

  constructor(){
    this.movies = [
      {
        id: 1,
        title: "The Rock",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi similique quod, sit, corrupti rerum praesentium eaque dignissimos blanditiis molestias quidem inventore laudantium quaerat error et ad, rem itaque. Rem, recusandae.",
        director: "Michel Bay",
        picture: "https://images-na.ssl-images-amazon.com/images/I/51Qorl8946L._AC_.jpg",
        rate: 4.2,
        releasedAt: "1993-05-22",
      },
      {
        id: 2,
        title: "Pulp Fiction",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi similique quod, sit, corrupti rerum praesentium eaque dignissimos blanditiis molestias quidem inventore laudantium quaerat error et ad, rem itaque. Rem, recusandae.",
        director: "Quentin Tarantino",
        picture: "https://static.posters.cz/image/750/affiches-et-posters/pulp-fiction-cover-i1288.jpg",
        rate: 3.5,
        releasedAt: "1995-06-22",
      },
      {
        id: 3,
        title: "Idependence Day",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi similique quod, sit, corrupti rerum praesentium eaque dignissimos blanditiis molestias quidem inventore laudantium quaerat error et ad, rem itaque. Rem, recusandae.",
        director: "Rolland Emrich",
        picture: "https://images-na.ssl-images-amazon.com/images/I/51K8V3J8EML._AC_SY445_.jpg",
        rate: 1.8,
        releasedAt: "2000-01-22",
      },
      {
        id: 4,
        title: "Titanic",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi similique quod, sit, corrupti rerum praesentium eaque dignissimos blanditiis molestias quidem inventore laudantium quaerat error et ad, rem itaque. Rem, recusandae.",
        director: "James Cameron",
        picture: "https://i.ebayimg.com/images/g/OEkAAOSwIUddNNDU/s-l300.jpg",
        rate: 2.5,
        releasedAt: "1998-01-22",
      },
    ];
  }

  getAll(){
    return this.movies;
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
