import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../service/account.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private http: AccountService,

    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) {
  }

  get f() { return this.form.controls; }

  ngOnInit() {

  }

  onSubmit() {}

}
