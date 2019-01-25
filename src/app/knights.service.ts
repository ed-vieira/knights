import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



const restUrl= 'http://localhost:3300/api/knights/';

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


  public restData(res: Response) {
    let body = res;
    return body || {};
  }

  

  public getKnights(): Observable<any> {
    return this.http.get(restUrl)
      .pipe(map(this.restData));
  }


  
  public getKnight(id): Observable<any> {
    return this.http.get(restUrl+id).pipe(
      map(this.restData));
  }



  public addKnight(knight): Observable<any> {
    console.log(knight);
    return this.http.post<any>(restUrl, JSON.stringify(knight), httpOptions).pipe(
      tap((knight) => console.log(`added Knight id=${knight._id}`)),
      catchError(this.handleError<any>('addKnight'))
    );
  }

  public updateKnight(id, knight): Observable<any> {
    return this.http.put(restUrl+id, JSON.stringify(knight), httpOptions).pipe(
      tap(_ => console.log(`updated Knight id=${id}`)),
      catchError(this.handleError<any>('updateKnight'))
    );
  }

  public deleteKnight(id): Observable<any> {
    return this.http.delete<any>(restUrl + id, httpOptions).pipe(
      tap(_ => console.log(`deleted Knight id=${id}`)),
      catchError(this.handleError<any>('deleteKnight'))
    );
  }

  public getHeroes(): Observable<any> {
    return this.http.get(restUrl+'filter/heroes')
      .pipe(map(this.restData)); 
  }

  public getHero(id): Observable<any> {
    return this.http.get(restUrl+'filter/heroes/' + id).pipe(
      map(this.restData));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} error: ${error.message}`);
      return of(result as T);
    };
  }




}
