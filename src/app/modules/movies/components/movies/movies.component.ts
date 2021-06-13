import { Component, OnInit } from '@angular/core';
import {Movie} from "../../mpdel/movie";
import {MovieService} from "../../service/movie.service";
import {Results} from "../../mpdel/results";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Results[]
  MovieInfa: Results
  page: number = 2

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies(this.page).subscribe(value => {this.movies = value.results})
    console.log(this.movies);
  }
  liftMovie(movie: Results){
this.MovieInfa = movie
  }
  Next(){
    if(this.page < 10){
      this.page += 1
      this.movieService.getMovies(this.page).subscribe(value => {this.movies = value.results})
      console.log(this.page);
    }
  }
  Before(){
     if(this.page > 2){
      this.page -= 1
      this.movieService.getMovies(this.page).subscribe(value => {this.movies = value.results})
    }
  }
}
