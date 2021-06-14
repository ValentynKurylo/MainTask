import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MoviesComponent } from './components/movies/movies.component';
import {MovieService} from "./service/movie.service";
import { MovieComponent } from './components/movie/movie.component';
import {CustomInterseptorService} from "./service/custom-interseptor.service";




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
   providers:[
     MovieService,
     {provide: HTTP_INTERCEPTORS,
     useClass: CustomInterseptorService,
     multi: true}
   ]
})
export class MoviesModule { }
