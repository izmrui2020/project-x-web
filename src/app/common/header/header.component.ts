import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment'
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick() {
    const url = environment.HOSTED_UI_LOGIN
    window.location.href = url
  }

  onSignupClick() {
    const url = environment.HOSTED_UI_SIGNUP
    window.location.href = url
  }

  onLogoutClick() {
    console.log("Logout Clicked");
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
