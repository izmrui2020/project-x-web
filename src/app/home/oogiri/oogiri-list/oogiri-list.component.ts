import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, interval } from 'rxjs';

import { Oogiri } from '../oogiri-model';
import { OogiriService } from '../oogiri.service';
import { CognitoService } from '../../../account/cognito.service';

@Component({
  selector: 'app-oogiri-list',
  templateUrl: './oogiri-list.component.html',
  styleUrls: ['./oogiri-list.component.scss']
})
export class OogiriListComponent implements OnInit {

  private token: string;
  oogiries: Oogiri[];
  errorMessage: string;

  constructor(
    private _os: OogiriService,
    private _cs: CognitoService,
  ) { }

  ngOnInit() {
    let timer = interval(1000);
    timer.subscribe(() => this.getOogiries());
  }

  getOogiries() {
    this._os.getOogiries()
      .subscribe(
        result => {
          this.oogiries = result;
          console.log(result);
        });
  }

}
