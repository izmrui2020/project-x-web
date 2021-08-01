import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../auth/cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;
  public confirmationForm: FormGroup;
  public successfullySignup: boolean;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _cognito: CognitoService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this._fb.group({
      username: ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.confirmationForm = this._fb.group({
      // username:         ['', Validators.required],
      // email:            ['', [Validators.required, Validators.email]],
      confirmationCode: ['', Validators.required]
    });
  }

  onSubmitSignup(signupForm: any) {
    const username  = signupForm.username,
          email     = signupForm.email,
          password  = signupForm.password;
      console.log(username, email, password)
      this._cognito.signUp(username,  password, email)
        .subscribe(
          result => {
            this.successfullySignup = true;
          },
          error => {
            console.log(error);
          }
        );
  }

  onSubmitConfirmation(value: any) {
    const confirmationCode  = value.confirmationCode;
    this._cognito.confirmSignUp(this._cognito.username, confirmationCode).subscribe(
      result => {
        console.log(result);
        this._cognito.login(  this._cognito.username,
                          this._cognito.password)
        .subscribe(
          () => {
            this._router.navigate(['/user']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/login']);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  moveConfimation() {
    this.successfullySignup = false
  }
}
