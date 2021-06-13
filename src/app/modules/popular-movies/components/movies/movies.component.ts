import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";
import {PmovieService} from "../../service/pmovie.service";
import {MovieFull} from "../../model/MovieFull";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  pageMovie: MovieFull
  movies: Movie[]
  page: number = 1
  constructor(private movieService: PmovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies(this.page).subscribe(value => {this.movies = value.results})
  }
  Next(){
    if(this.page < 900) {
      this.page += 1
      this.movieService.getMovies(this.page).subscribe(value => {
        this.movies = value.results
      })
    }
  }
  Before(){
    if(this.page > 0){
      this.page -= 1
      this.movieService.getMovies(this.page).subscribe(value => {
        this.movies = value.results
      })
    }
  }

}
