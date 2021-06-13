import {Component, Input, OnInit} from '@angular/core';
import {Genre} from "../../model/genre";
import {GenresService} from "../../service/genres.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  @Input()
  genre: Genre[]

  constructor(private genreService: GenresService) { }

  ngOnInit(): void {
    this.genreService.getGenre().subscribe(value => {this.genre = value.genres})
    console.log(this.genre);
  }

}
