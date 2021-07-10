import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment'

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
    const url = environment.HostedUiLogin
    window.location.href = url
  }

  onSignupClick() {
    const url = environment.HostedUiSignup
    window.location.href = url
  }

}
