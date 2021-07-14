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
    private router: Router,
    private cognitose: CognitoService,
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
      this.cognitose.signUp(email, password)
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
    this.cognitose.confirmSignUp(email, confirmationCode).subscribe(
      result => {
        this.cognitose.signIn(email, this.cognitose.password).subscribe(
          () => {
            this.router.navigate(['/user']);
          },
          error => {
            console.log(error);
            this.router.navigate(['/login']);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

}
