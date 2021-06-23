import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpService } from '../../../service/http.service'

@Component({
  selector: 'app-post-cat',
  templateUrl: './post-cat.component.html',
  styleUrls: ['./post-cat.component.scss']
})
export class PostCatComponent implements OnInit {

  imgFile: string;

  new_post = this.fb.group({
    name: ['', Validators.required],
    file: ['', Validators.required],
    imgSrc: ['', Validators.required],
    description: ['', Validators.required]
  });


  constructor(
    private hs: HttpService,
    private fb: FormBuilder,
  ) { }

  get uf(){
    return this.new_post.controls;
  }

  onImageChange(event) {
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

  upload(){
    console.log(this.new_post.value);
    this.hs.catPost(this.new_post.value)
  }

  ngOnInit(): void {
  }

}
