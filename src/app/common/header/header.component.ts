import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CognitoService } from '../../account/auth/cognito.service';

import Amplify, { Auth } from 'aws-amplify';
import amplify from '../../../aws-exports';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewChecked {
  loggedIn: boolean;
  subscription: Subscription;
  nickname: string;

  constructor(
    private _cd: ChangeDetectorRef,
    public _cognito: CognitoService,
  ) {
    Amplify.configure(amplify);
    this.nickname = localStorage.getItem(
      amplify.localstorageBaseKey + 'LastAuthUser'
    );
  }

  ngOnInit() {
    this.subscription = this._cognito.isAuthenticated()
      .subscribe(result => {
        this.loggedIn = result;
        console.log('get isAuthenticated', result)
      });
    console.log('subscription', this.subscription);
    //this.loggedIn = false;

  }

  ngAfterViewChecked() {
    this.nickname = localStorage.getItem(
      amplify.localstorageBaseKey + 'LastAuthUser'
    );
    this._cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('after ngOnDestroy', this.subscription);
  }

  clickLogout() {
    this._cognito.signOut();
  }

  clickLogin() {
    const url = process.env.HOSTED_UI_LOGIN
    window.location.href = "/login"
  }

  clickSignup() {
    const url = process.env.HOSTED_UI_SIGNUP
    window.location.href = "/signup"
  }

  // onLogoutClick() {
  //   console.log("Logout Clicked");
  //   Auth.signOut({ global: true })
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // }

}
