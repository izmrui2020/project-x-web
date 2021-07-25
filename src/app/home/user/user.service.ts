import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../_models/user-model';

const baseUrl = `${environment.API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.API_URL + '/user';

  constructor(
    private _http: HttpClient,
  ) { }

  public getUserOogiries(token: string): Observable<any> {
    const httpOptions = {
      headers: { Authorization: token }
    };
    return this._http.get<any>(this.URL, httpOptions)
      .pipe(
        tap(users => users),
        catchError(this.handleError('getFile', []))
    );
  }

  getById(id: string) {
    return this._http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this._http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    return this._http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this._http.delete(`${baseUrl}/${id}`);
  }

/////////////////////////////////////////////////
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
