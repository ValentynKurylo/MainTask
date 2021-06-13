import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenresComponent} from "./component/genres/genres.component";
import {MoviesGComponent} from "./component/movies-g/movies-g.component";

const routes: Routes = [
  {path: '', component: GenresComponent, children:[
     {path: 'genre', component: MoviesGComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
