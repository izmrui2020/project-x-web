import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  userForm: FormGroup;
  imgFile: string;
  loading = false;
  judgimg: boolean;

  constructor(
    private _fb: FormBuilder,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _us: UserService,
  ) {
    this.judgimg = true;
  }

  get f(){
    return this.userForm.controls;
  }

  ngOnInit() {
    this.userForm = this._fb.group({
      nickname:     ['', Validators.required],
      avatar:       [''],
      avatarSrc:    ['']
    })
  }

  onImageChange(e) {
    this.judgimg = false;
    const reader = new FileReader();
    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.userForm.patchValue({
          //avatar: reader.result
          avatarSrc: reader.result
        });
      console.log(this.judgimg)
      };
    }
  }

  onSubmit() {
    console.log(this.userForm.value)
    this._us.postNewUser(this.userForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      }
    )
  }

}
