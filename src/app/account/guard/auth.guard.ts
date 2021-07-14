import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { GuardService } from '../guard.service';
import { CognitoService } from '../cognito.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private guardse: GuardService,
    private cognitose: CognitoService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // return this.cognitose.isAuthenticated()
      //   .pipe(
      //     tap(loggedIn => {
      //       if (!loggedIn) {
      //         this.router.navigate(['/login']);
      //       }
      //     })
      //   )
      return true;
  }

}
