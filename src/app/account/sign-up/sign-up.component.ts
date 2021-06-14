import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AccountService } from '../../service/account.service';

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
  ) { }

  ngOnInit(): void {
  }

}
