import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Genre} from "../../model/genre";
import {MovieGR} from "../../model/movieGR";
import {GenresService} from "../../service/genres.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: Genre
  //movieG: MovieGR[]
  moviesG: MovieGR[]
  bool: boolean = false

  constructor(private movieGenreService: GenresService) { }

  ngOnInit(): void {
     this.movieGenreService.getMoviesGenre().subscribe(value => {this.moviesG = value.results})
  }
  show(){
    this.bool = true
  }
  hide(){
    this.bool = false
  }
}
