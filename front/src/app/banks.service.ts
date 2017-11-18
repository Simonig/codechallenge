import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseUrl} from './constants'
import {catchError, map, tap} from 'rxjs/operators';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bank} from "./interfaces";
import { of } from 'rxjs/observable/of';


@Injectable()
export class BanksService {

  constructor(private http: HttpClient,) {
  }

  /*getBanks(): Observable<[Bank]> {
    return this.http.get<any>(baseUrl + '/api/banks').pipe(
      map(response => response.result),
      catchError(this.handleError('getHeroes', []))

  )
  };*/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
