import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CognitoService } from '../../account/cognito.service';

import { environment } from '../../../environments/environment'
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;
  subscription: Subscription;

  constructor(
    private _auth: CognitoService,
  ) { }

  ngOnInit() {
    // this.subscription = this.auth.isAuthenticated()
    //   .subscribe(result => {
    //     this.loggedIn = result;
    //   });
    this.loggedIn = false;
  }

  ngOnDestroy() {
    //これを動作させるとエラーになる
    //this.subscription.unsubscribe();
  }

  onClickLogout() {
    this._auth.signOut();
  }

  onLoginClick() {
    const url = environment.HOSTED_UI_LOGIN
    window.location.href = "/login"
  }

  onSignupClick() {
    const url = environment.HOSTED_UI_SIGNUP
    window.location.href = "/signup"
  }

  onLogoutClick() {
    console.log("Logout Clicked");
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
