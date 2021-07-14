import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Oogiri } from './oogiri-model';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class OogiriService {
  private URL = environment.API_URL; //url: 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    private htservie: HttpService,
  ) { }

  public getOogiries(): Observable<any> {
    return this.http.get<any>(this.URL + "/oogiris")
      .pipe(
        map((res = Response) => {
          return <Oogiri[]>res;
        }
      ),
      catchError(this.handleError('getFile', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('petService: ' + message);
  }

}
