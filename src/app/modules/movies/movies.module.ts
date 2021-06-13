import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { MoviesComponent } from './components/movies/movies.component';
import {MovieService} from "./service/movie.service";
import { MovieComponent } from './components/movie/movie.component';




@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
   providers:[MovieService]
})
export class MoviesModule { }
