import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../_models/user-model';

const baseUrl = `${environment.API_URL}/api/v1`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      //'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  }

  constructor(
    private _http: HttpClient,
  ) { }

  public getUserOogiries(token: string): Observable<any> {
    // const httpOptions = {
    //   headers: { Authorization: token }
    // };
    return this._http.get<any>(`${baseUrl}`)
      .pipe(
        tap(users => users),
        catchError(this.handleError('getFile', []))
    );
  }

  getById(id: string) {
    return this._http.get<User>(`${baseUrl}/${id}`);
  }

  postNewUser(values): Observable<any> {
    return this._http.post<any>(`${baseUrl}/users/`, values, this.httpOptions)
    .pipe(
      catchError(this.handleError<any[]>('postNewUser', []))
    )
  }

  update(id: string, params: any) {
    return this._http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this._http.delete(`${baseUrl}/${id}`);
  }

/**
 * 失敗したHttp操作を処理します。
 * アプリを持続させます。
 * @param operation - 失敗した操作の名前
 * @param result - observableな結果として返す任意の値
 */
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
