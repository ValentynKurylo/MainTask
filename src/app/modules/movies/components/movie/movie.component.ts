import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Results} from "../../mpdel/results";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  result: Results

@Output()
liftMovie = new EventEmitter<Results>()

  constructor() { }

  ngOnInit(): void {
  }

  showMovie(){
    this.liftMovie.emit(this.result)
  }
}
