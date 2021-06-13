import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genres} from "../model/Genres";
import {MovieG} from "../model/movieG";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US'

  constructor(private httpClint: HttpClient) { }

  getGenre():Observable<Genres>{
    return this.httpClint.get<Genres>(this.url)
  }

  getMoviesGenre():Observable<MovieG>{
    return this.httpClint.get<MovieG>('https://api.themoviedb.org/3/movie/popular?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1')
  }
}
