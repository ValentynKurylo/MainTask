import {Component, Input, OnInit} from '@angular/core';
import {MovieGR} from "../../model/movieGR";

@Component({
  selector: 'app-movie-g',
  templateUrl: './movie-g.component.html',
  styleUrls: ['./movie-g.component.css']
})
export class MovieGComponent implements OnInit {

  @Input()
  movie: MovieGR

  constructor() { }

  ngOnInit(): void {
  }

}
