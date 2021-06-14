import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreIntercepterService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     let clone = req.clone({
        headers: new HttpHeaders(

          {'Content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E2MjhjMmRhMmQzZDBiOWNlMzQ0MzY3NWYzYTljYyIsInN1YiI6IjYwYzQ3ZmZmYTI4NGViMDA0MDY4NDY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acI5zOMEkNGJ_RROslscHnHIJoA0elZ2ywDzGt4GgdQ'}
        )
     })
    return next.handle(clone);
  }
}
