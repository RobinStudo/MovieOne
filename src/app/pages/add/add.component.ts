import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MovieService){
    this.movie = new Movie();
  }

  ngOnInit(): void {}

  send(){
    this.movieService.add(this.movie).subscribe(() => {
      alert('Film créé');
    });
  }
}
