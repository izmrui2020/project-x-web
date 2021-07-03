import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.scss']
})
export class ProposalNewComponent implements OnInit {

  proposal = new Proposal;

  imgFile: string;

  new_post = this._fb.group({
    topic: ['', Validators.required],
    file: ['', Validators.required],
    oogiri: ['', Validators.required],
    description: ['', Validators.required],
    imgSrc: ['', Validators.required]
  });

  constructor(
    private _fb: FormBuilder,
  ) { }

  get uf(){
    return this.new_post.controls;
  }

  onImageChange(event): void {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.new_post.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }

  onSubmit(): void {
    console.log(this.new_post.value);
  }

  ngOnInit(): void {}
}
