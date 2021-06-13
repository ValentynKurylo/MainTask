import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieFull} from "../model/MovieFull";

@Injectable({
  providedIn: 'root'
})
export class PmovieService {

  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page='

  constructor(private httpClint: HttpClient) { }

  getMovies(page: number):Observable<MovieFull>{
    return this.httpClint.get<MovieFull>(this.url+page)
  }
}
