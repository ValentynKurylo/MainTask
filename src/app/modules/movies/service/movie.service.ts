import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../mpdel/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //private url = 'https://api.themoviedb.org/3/movie/3/lists?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1'

  constructor(private httpClint: HttpClient) { }

  getMovies(page: number):Observable<Movie>{
    return this.httpClint.get<Movie>(
      'https://api.themoviedb.org/3/movie/'+page+'/lists?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1'
      /*,
      {headers: new HttpHeaders(

          {'Content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E2MjhjMmRhMmQzZDBiOWNlMzQ0MzY3NWYzYTljYyIsInN1YiI6IjYwYzQ3ZmZmYTI4NGViMDA0MDY4NDY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acI5zOMEkNGJ_RROslscHnHIJoA0elZ2ywDzGt4GgdQ'}
        )}*/)
  }
}
