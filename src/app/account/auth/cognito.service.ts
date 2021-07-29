import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject, from } from 'rxjs'
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
//setting cognito
import Amplify, { Auth } from 'aws-amplify';
import amplify from '../../../aws-exports';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AuthProvider } from './auth-provider';
//import { Store } from '@ngrx/store';
//import fromAuth, * as authSlice from './auth.slice';
import { AuthUser } from './cognito-user-model';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CognitoService implements AuthProvider {

  public loggedIn: BehaviorSubject<boolean>;
  password: string;

  constructor(
    private _router: Router,
    //private store: Store<typeof fromAuth>
  ) {
    Amplify.configure(amplify)
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

/**********************User情報の取得************************/
  public currentAuthenticatedSession(): Observable<any> {
    return fromPromise(Auth.currentAuthenticatedUser())
  }


  isAuthenticated$: Observable<boolean>;
  completeNewPassword(password: string): void {
    throw new Error('Method not implemented.');
  }
  confirmSignIn(code: string): void {
    throw new Error('Method not implemented.');
  }

/*************************新規作成***************************/
  public signUp(username: string, email: string, password: string): Observable<any> {
    this.password = password;
    return fromPromise(Auth.signUp(username, email, password));
  }

/*************************検証******************************/
  public confirmSignUp(email: string, code: string): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

/*************************ログイン***************************/
  public login(username: string, password: string): Observable<any> {
    return fromPromise(Auth.signIn(username, password))
    .pipe(
      tap(() => this.loggedIn.next(true))
    );
  }
/*************************ログイン状態の取得*******************/
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

/*************************ログアウト*************************/
  public logout() {
    fromPromise(Auth.signOut())
    .subscribe(
      result => {
        this.loggedIn.next(false);
        this._router.navigate(['/login']);
      },
    error => console.log(error)
    );
  }

/**********************IdTokenを取得*************************/
  public getIdToken(): string {
    return Auth.currentSession()['__zone_symbol__value']['idToken']['jwtToken'];
  }

}
