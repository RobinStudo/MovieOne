import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  movies: Array<any> = [];
  movie: any;

  constructor(private route: ActivatedRoute){
    this.movies = [
      {
        id: 1,
        title: "The Rock",
        director: "Michel Bay",
        picture: "https://images-na.ssl-images-amazon.com/images/I/51Qorl8946L._AC_.jpg",
        rate: 4.2,
        releasedAt: "1993-05-22",
      },
      {
        id: 2,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        picture: "https://static.posters.cz/image/750/affiches-et-posters/pulp-fiction-cover-i1288.jpg",
        rate: 3.5,
        releasedAt: "1995-06-22",
      },
      {
        id: 3,
        title: "Idependence Day",
        director: "Rolland Emrich",
        picture: "https://images-na.ssl-images-amazon.com/images/I/51K8V3J8EML._AC_SY445_.jpg",
        rate: 1.8,
        releasedAt: "2000-01-22",
      },
      {
        id: 4,
        title: "Titanic",
        director: "James Cameron",
        picture: "https://i.ebayimg.com/images/g/OEkAAOSwIUddNNDU/s-l300.jpg",
        rate: 2.5,
        releasedAt: "1998-01-22",
      },
    ];
    
    const id = this.route.snapshot.params['id'];

    for(let movie of this.movies){
      if(movie.id == id){
        this.movie = movie;
      }
    }
    console.log(this.movie);
  }

  ngOnInit(): void {
  }

}
