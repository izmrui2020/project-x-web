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
    this.isAddMode = !this.id;

    this.userForm = this._fb.group({
      userid:     ['', Validators.required], //[user.id]
      username:   ['', Validators.required], //[user.name]
      avatar_url: ['', Validators.required], //[user.acatar_usl] こんな感じでパラメータの取得
      avatarSrc:  ['', Validators.required],
    });

    if (!this.isAddMode) {
      this._us.getById(this.id)
        .pipe(first())
        .subscribe(x => this.userForm.patchValue(x));
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
    // this._us.create(this.userForm.value)
    //   .pipe(first())
    //   .subscribe(() => {
    //     //this.alertService.success('User added', { keepAfterRouteChange: true });
    //     this._router.navigate(['../'], { relativeTo: this._ar});
    //   })
    //   .add(() => this.loading = false);
  }

  private updateUser() {
    this._us.update(this.id, this.userForm.value)
      .pipe(first())
      .subscribe(() => {
        //this.alertService.success('User updated', { keepAfterRouteChange: true });
        this._router.navigate(['../../'], { relativeTo: this._ar });
      })
      .add(() => this.loading = false);
  }

}
