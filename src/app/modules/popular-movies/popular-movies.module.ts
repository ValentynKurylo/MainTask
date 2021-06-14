import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularMoviesRoutingModule } from './popular-movies-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PmovieService} from "./service/pmovie.service";
import { MovieComponent } from './components/movie/movie.component';
import {CustomInterseptorService} from "../movies/service/custom-interseptor.service";


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
  providers:[PmovieService,
  {provide: HTTP_INTERCEPTORS,
     useClass: CustomInterseptorService,
     multi: true}]
})
export class PopularMoviesModule { }
