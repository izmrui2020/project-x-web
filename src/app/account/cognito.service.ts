import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
//setting cognito
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../../aws-exports';
/* Configure Amplify resources */


import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    Amplify.configure(awsconfig);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

/**
 *
 *signUp Method
 *
 *
 * */
  public signUp(email, password): Observable<any> {
  return fromPromise(Auth.signUp(email, password));
  }

/**
 *
 *
 *
 *
 * */

}
