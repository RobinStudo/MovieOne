import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: any;
  timer: any;

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
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const observable = this.movieService.search(query);

      observable.subscribe(data => {
        this.movies = data;
      }, () => {
        alert("Une erreur est survenue");
      });
    }, 600);
  }
}
