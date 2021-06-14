import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../service/account.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form = this.fb.group({
    email: ['', Validators.required],
    pass: ['', Validators.required]
  })

  // loading = false;
  // submitted = false; angular2-token  ???

  constructor(
    private http: AccountService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) {
  }

  get f() { return this.login_form.controls; }

  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.login_form.value);
  }

}
