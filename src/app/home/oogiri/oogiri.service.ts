import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Oogiri } from '../_models/oogiri-model';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class OogiriService {
  private URL = environment.API_URL; //url: 'http://localhost:3000'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private _http: HttpClient,
    private htservie: HttpService,
  ) { }

  oogiriList: Oogiri[];
/**Get oogiri list */
  public getOogiries(): Observable<any> {
    return this._http.get<any>(this.URL + "/oogiris")
      .pipe(
        map((res = Response) => {
          this.oogiriList = res;
          return <Oogiri[]>res;
        }
      ),
      catchError(this.handleError('getFile', []))
    )
  }

/**get specific data object */
  public getObject(id: number) {
    return this.oogiriList[id]
  }

/**Post new Oogiri object */
  public postNewOogiri(values): Observable<any> {
    return this._http.post<any>(URL + "/", values)
      .pipe(
        catchError(this.handleError<any[]>('postNewOogiri', []))
      )
  }

/** PUT: サーバー上でヒーローを更新 */
updateHero() {
  // return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //   tap(_ => this.log(`updated hero id=${hero.id}`)),
  //   catchError(this.handleError<any>('updateHero'))
  // );
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
