import { Component, OnInit } from '@angular/core';
import {MovieGR} from "../../model/movieGR";
import {GenresService} from "../../service/genres.service";
import {Genre} from "../../model/genre";

@Component({
  selector: 'app-movies-g',
  templateUrl: './movies-g.component.html',
  styleUrls: ['./movies-g.component.css']
})
export class MoviesGComponent implements OnInit {

  moviesG: MovieGR[]
  genre: Genre

  constructor(private movieGenreService: GenresService) { }

  ngOnInit(): void {
    this.movieGenreService.getMoviesGenre().subscribe(value => {this.moviesG = value.results})
  }

}
