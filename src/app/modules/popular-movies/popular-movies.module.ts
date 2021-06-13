import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularMoviesRoutingModule } from './popular-movies-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule} from "@angular/common/http";
import {PmovieService} from "./service/pmovie.service";
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    PopularMoviesRoutingModule,
    HttpClientModule
  ],
  providers:[PmovieService]
})
export class PopularMoviesModule { }
