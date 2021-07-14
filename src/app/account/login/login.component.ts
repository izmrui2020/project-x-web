import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private cognitose: CognitoService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmitLogin(value: any) {
    const email = value.email,
    password = value.password;
    this.cognitose.signIn(email, password)
      .subscribe(result => {
        this.router.navigate(['/user']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
