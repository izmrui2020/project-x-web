import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

import { OogiriService } from '../oogiri.service';
//AWS
import { CognitoService } from '../../../account/auth/cognito.service';
import Amplify, { Auth } from 'aws-amplify';
import amplify from '../../../../aws-exports';

import { Oogiri } from '../../_models/oogiri-model';
import { User } from '../../_models/user-model';

@Component({
  selector: 'app-oogiri-new',
  templateUrl: './oogiri-new.component.html',
  styleUrls: ['./oogiri-new.component.scss']
})
export class OogiriNewComponent implements OnInit {
  nickname: string;
  postForm: FormGroup;
  imgFile: string;
  //imgSrc: ArrayBuffer;
  loading = false;
  judgimg: boolean;
  private token: string;

  constructor(
    private _fb: FormBuilder,
    private _oogiri: OogiriService,
    private _cognito: CognitoService,
  ) {
    this.postForm = this._fb.group({
      title:        ['', Validators.required],
      image:        [''],
      oogiri:       ['', Validators.required],
      description:  ['']
    });
  }
// FormControlsを明示的に扱えるようにする。
  get f(){
    return this.postForm.controls;
  }

  ngOnInit(){
    this.judgimg = true;
    this.token = this._cognito.getIdToken();
    this.currentAuthenticatedSession();
    this.nickname = localStorage.getItem(
      amplify.localstorageBaseKey = 'LastAuthUser'
    );
  }

  currentAuthenticatedSession() {
    this._cognito.currentAuthenticatedSession()
    .subscribe(
      result => {
        console.log(result);
        this.nickname = result.username;
        console.log('nickname', this.nickname)
      },
      error => {
        console.log(error)
      }
    )
  }

  //その他をPOSTする時のメソッド
onSubmitData() {

}

//画像のPOSTメソッドとその他で分ける。
  onImageChange(event) {
    this.judgimg = false;
    this.fileReader(event);
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.postForm.get('image').setValue(file);
      //this.postForm.get('image').updateValueAndValidity()
      console.log(this.postForm.get('image').value)
    };
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

  onSubmitImage() {
    var formData: any = new FormData();
    formData.append("oogiri[title]", this.postForm.get('title').value);
    formData.append("oogiri[image]", this.postForm.get('image').value);
    formData.append("oogiri[oogiri]", this.postForm.get('oogiri').value);
    formData.append("oogiri[description]", this.postForm.get('description').value);

    console.log('postdata', this.postForm.value, formData);
    this._oogiri.postNewOogiri(formData, this.token)
      .subscribe(
        res => {
          console.log(res);
          alert('Successfully.');
        },
        error => {
          console.log(error);
          alert(error);
        }
      )
  }

}
