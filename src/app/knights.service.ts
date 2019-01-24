import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://localhost:3300/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class KnightsService {

  constructor(private http: HttpClient) {

  }


  public extractData(res: Response) {
    let body = res;
    return body || {};
  }


  public getKnights(): Observable<any> {
    
    return this.http.get(endpoint + 'knights')
      .pipe(map(this.extractData));
    
  }


  public getHeroes(): Observable<any> {
    
    return this.http.get(endpoint + 'knights/filter/heroes')
      .pipe(map(this.extractData));
    
  }


  
  public getKnight(id): Observable<any> {
    return this.http.get(endpoint + 'knights/' + id).pipe(
      map(this.extractData));
  }

  public addKnight(knight): Observable<any> {
    console.log(knight);
    return this.http.post<any>(endpoint + 'Knights', JSON.stringify(knight), httpOptions).pipe(
      tap((knight) => console.log(`added Knight w/ id=${knight._id}`)),
      catchError(this.handleError<any>('addKnight'))
    );
  }

  public updateKnight(id, knight): Observable<any> {
    return this.http.put(endpoint + 'knight/' + id, JSON.stringify(knight), httpOptions).pipe(
      tap(_ => console.log(`updated Knight id=${id}`)),
      catchError(this.handleError<any>('updateKnight'))
    );
  }

  public deleteKnight(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'knights/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted Knight id=${id}`)),
      catchError(this.handleError<any>('deleteKnight'))
    );
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }




}
