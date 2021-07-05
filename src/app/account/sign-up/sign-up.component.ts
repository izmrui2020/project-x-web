import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AccountService } from '../account.service';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signup_form = this.fb.group({
    name: [''],
    email: [''],
    pass: [''],
    pass2: ['']
  })

  constructor(
    private http: AccountService,
    private fb: FormBuilder,
    private cognito: CognitoService,
  ) { }

  onSubmitSignup(value: any) {
    const email = value.email, password = value.password;
    this.cognito.signUp(email, password)
    .then((result) => {
      console.log(result);
      this.successfullySignup = true;
    }).catch((err) => {
      console.log(err);
    });
  }

  onSubmitConfirmation(value: any) {
    const email = value.email, confirmationCode = value.confirmationCode;
    console.log(email);
    this.cognito.confirmation(email, confirmationCode)
    .then((result) => {
      return console.log(result) || this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
