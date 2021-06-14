import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../mpdel/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClint: HttpClient) { }

  getMovies(page: number):Observable<Movie>{
    return this.httpClint.get<Movie>(
      'https://api.themoviedb.org/3/movie/'+page+'/lists?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1'
    )
  }
}
