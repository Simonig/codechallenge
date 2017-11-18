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

  getBanks(): Observable<[Bank]> {
    return this.http.get<any>(baseUrl + '/api/banks').pipe(
      map(response => response.result),
      catchError(this.handleError('getBanks', []))

  )};

  sendForm(form): Observable<string> {
    return this.http.post<any>(baseUrl +'/api/form', form).pipe(
      map(response => response),
      catchError(this.handleError('sendForm', []))

  )};

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


}
