import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

let routers = [
  {path: 'movies', loadChildren:()=>import('./modules/movies/movies.module').then(m=>m.MoviesModule)},
  {path: 'moviesPopular', loadChildren:()=>import('./modules/popular-movies/popular-movies.module').then(m=>m.PopularMoviesModule)},
  {path: 'genres', loadChildren:()=>import('./modules/genres/genres.module').then(m=>m.GenresModule)},
  ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
