import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: any;

  constructor(private movieService: MovieService){
    const observable = this.movieService.getAll();

    observable.subscribe(data => {
      this.movies = data;
    }, () => {
      alert("Une erreur est survenue");
    });
  }

  ngOnInit(): void {
  }

  search(query: string){
    this.movies = this.movieService.search(query);
  }
}
