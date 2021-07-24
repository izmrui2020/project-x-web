import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {

  userForm: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private _fb: FormBuilder,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _us: UserService,
  ) { }

  ngOnInit() {
    this.id = this._ar.snapshot.params['id'];

    this.userForm = this._fb.group({
      username: ['', Validators.required],
      userid: ['', Validators.required],
      avatar_url: ['', Validators.required],
      avatarSrc: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  onSubmit() {

  }

}
