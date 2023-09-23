import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  base_URL = "http://localhost:3000/movies"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  handlerError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error ocurred ${error.status}, body was: ${error.error}`);
    } else{
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(
      'Something happened with request, please try again later.'
      ); 
  }

  getList(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.base_URL)
    .pipe(retry(2), catchError(this.handlerError))
  }

  //LISTAR → GET
  getMovie(id: string): Observable<Movie>{
    return this.http.get<Movie>(`${this.base_URL}/${id}`)
    .pipe(retry(2), catchError(this.handlerError))
  }

  //CREATE → POST
  createMovie(item: any): Observable<Movie>{
    return this.http.post<Movie>(this.base_URL, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handlerError));
  }

  //DELETE → DELETE
  deleteMovie(id: string): Observable<Movie>{
    return this.http.delete<Movie>(`${this.base_URL}/${id}`, this.httpOptions)
    .pipe(retry(2), catchError(this.handlerError))
  }

  updateMovie(id: string, item: any): Observable<Movie>{
    return this.http.put<Movie>(this.base_URL + '/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handlerError));
  }

}
