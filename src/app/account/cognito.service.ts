import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject, from } from 'rxjs'
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
//setting cognito
import { Auth } from 'aws-amplify';

//import { AuthProvider } from './auth-provider';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  public loggedIn: BehaviorSubject<boolean>;
  password: String;

  constructor(
    private _router: Router
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  currentAuthenticatedSession$: Observable<{}>;
  isAuthenticated$: Observable<boolean>;

  login(authentication: {}): void {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }






/**
 *  @param
 * signUp Method */
  public signUp(email, password): Observable<any> {
    this.password = password;
    return fromPromise(Auth.signUp(email, password));
  }

/**
 *  @param
 * 検証 */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

/**
 *  @param //ここにぱらむ作る。
 *
 * ログイン*/
  public signIn(email, password): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
    .pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

/** ログイン状態の取得 */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
    .pipe(
      map(result => {
      this.loggedIn.next(true);
      return true;
    }),
    catchError(error => {
      this.loggedIn.next(false);
      return of(false);
      })
    );
  }

/** ログアウト */
  public signOut() {
    fromPromise(Auth.signOut())
    .subscribe(
      result => {
        this.loggedIn.next(false);
        this._router.navigate(['/login']);
      },
    error => console.log(error)
    );
  }

/**
 *
 * ログインユーザ情報の取得 */
  public getData(): Observable<any> {
    return fromPromise(Auth.currentAuthenticatedUser())
  }

/**
 *
 * idtokenを取得 */
  public getIdToken(): string {
    return Auth.currentSession()['__zone_symbol__value']['idToken']['jwtToken'];
  }

}
