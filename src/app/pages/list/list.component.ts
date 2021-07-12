import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Array<any> = [];

  constructor(private movieService: MovieService){
    this.movies = this.movieService.getAll();
  }

  ngOnInit(): void {
  }

  search(query: string){
    this.movies = this.movieService.search(query);
  }
}
