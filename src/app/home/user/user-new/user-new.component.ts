import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';
import { CognitoService } from '../../../account/auth/cognito.service';
import { HomeService } from '../../home.service';
import { RailsUserFormData } from '../rails-user-formdata';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  private token: string;
  userForm: FormGroup;
  imgFile: string;
  avatarSrc: ArrayBuffer;
  loading = false;
  judgimg: boolean;

  constructor(
    private _fb: FormBuilder,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _us: UserService,
    private _home: HomeService,
    private _cognito: CognitoService,
  ) {
    this.judgimg = true;

    this.userForm = this._fb.group({
      nickname:     ['', Validators.required],
      avatar:       ['']
    })
  }

  get f(){
    return this.userForm.controls;
  }

  ngOnInit() {
    this.token = this._cognito.getIdToken();
  }

  onImageChange(event) {
    this.judgimg = false;
    this.fileReader(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userForm.get('avatar').setValue(file);
      this.userForm.get('avatar').updateValueAndValidity()
    }
  }

  fileReader(data) {
    const reader = new FileReader();
    const [file] = data.target.files;
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.imgFile = reader.result as string;
    console.log(this.judgimg)
    };
  }

  onSubmit() {
    var formData: any = new FormData();
    formData.append("user[nickname]", this.userForm.get('nickname').value);
    formData.append("user[avatar]", this.userForm.get('avatar').value);

    console.log('etc', this.userForm.value, formData)
    this._us.postNewUser(formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      }
    )
    //????????????????????????????????????nickname???avatar.??????????????????????????????????????????
  }

///Base64????????????????????????????????????
  // onImageChange(e) {
  //   this.judgimg = false;
  //   const reader = new FileReader();
  //   if(e.target.files && e.target.files.length) {
  //     const [file] = e.target.files;
  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       this.imgFile = reader.result as string;
  //       this.userForm.patchValue({
  //         //avatar: reader.result
  //         avatarSrc: reader.result
  //       });
  //     console.log(this.judgimg)
  //     };
  //   }
  // }

}
