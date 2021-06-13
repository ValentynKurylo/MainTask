import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './component/genres/genres.component';
import {HttpClientModule} from "@angular/common/http";
import {GenresService} from "./service/genres.service";
import { GenreComponent } from './component/genre/genre.component';
import { MoviesGComponent } from './component/movies-g/movies-g.component';
import { MovieGComponent } from './component/movie-g/movie-g.component';



@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
    MoviesGComponent,
    MovieGComponent,
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule
  ],
  providers: [GenresService]
})
export class GenresModule { }
