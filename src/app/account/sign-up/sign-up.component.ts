import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito.service';

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
    private _cs: CognitoService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this._fb.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
    });
    this.confirmationForm = this._fb.group({
      email:            ['', Validators.required],
      confirmationCode: ['', Validators.required]
    });
  }

  onSubmitSignup(value: any) {
    const email     = value.email,
          password  = value.password;
      this._cs.signUp(email, password)
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
    const email             = value.email,
          confirmationCode  = value.confirmationCode;
    this._cs.confirmSignUp(email, confirmationCode).subscribe(
      result => {
        this._cs.signIn(email, this._cs.password).subscribe(
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

}
