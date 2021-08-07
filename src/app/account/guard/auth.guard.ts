import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { GuardService } from './guard.service';
import { CognitoService } from '../auth/cognito.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _guardservice: GuardService,
    private _cognito: CognitoService,
    private _router: Router
  ) {}

  //Conitoにログイン状態か聞きにいく。
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._cognito.isAuthenticated()
        .pipe(
          tap(loggedIn => {
            if (!loggedIn) {
              this._router.navigate(['/login']);
            }
          }
        )
      )
  }

}
