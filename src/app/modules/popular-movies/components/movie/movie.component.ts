import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: Movie

  constructor() { }

  ngOnInit(): void {
    console.log(typeof this.movie.backdrop_path);
  }

}
