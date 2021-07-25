import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

import { OogiriService } from '../oogiri.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-oogiri-new',
  templateUrl: './oogiri-new.component.html',
  styleUrls: ['./oogiri-new.component.scss']
})
export class OogiriNewComponent implements OnInit {
  URL = environment.API_URL;
  imgFile: string;

  new_post = this._fb.group({
    topic:        ['', Validators.required],
    file:         ['', Validators.required],
    oogiri:       ['', Validators.required],
    description:  [''],
    imgSrc:       ['']
  });

  constructor(
    private _fb: FormBuilder,
    private _oogiri: OogiriService,
    private http: HttpClient,
  ) { }

// FormControlsを明示的に扱えるようにする。
  get f(){
    return this.new_post.controls;
  }

  onImageChange(e) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.new_post.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }

  onSubmit() {
    console.log(this.new_post.value);
    this._oogiri.postNewOogiri(this.new_post.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      }
    )
  }

  ngOnInit(){}
}
