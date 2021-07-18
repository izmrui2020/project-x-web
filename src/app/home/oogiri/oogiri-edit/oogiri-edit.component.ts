import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-oogiri-edit',
  templateUrl: './oogiri-edit.component.html',
  styleUrls: ['./oogiri-edit.component.scss']
})
export class OogiriEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor() { }

  save(): void {
    // if (this.hero) {
    //   this.heroService.updateHero(this.hero)
    //     .subscribe(() => this.goBack());
    // }
  }

  ngOnInit(): void {
  }

}
