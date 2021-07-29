import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../auth/cognito.service';

import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  authState: AuthState;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _cs: CognitoService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      username:     ['', Validators.required],
      password:     ['', Validators.required]
    })
  }

  onSubmitLogin(value: any) {
    console.log('1', value)
    const username = value.username,
    password = value.password;
    this._cs.login(username, password)
      .subscribe(result => {
        this._router.navigate(['/user']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
