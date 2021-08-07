import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, interval } from 'rxjs';

import { Oogiri } from '../../_models/oogiri-model';
import { OogiriService } from '../oogiri.service';
import { CognitoService } from '../../../account/auth/cognito.service';
import { AlertService } from '../../../common/_alert/alert.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-oogiri-list',
  templateUrl: './oogiri-list.component.html',
  styleUrls: ['./oogiri-list.component.scss']
})

export class OogiriListComponent implements OnInit {
  oogiries : Oogiri[]
  pageOfItems: Array<any>;

  private token: string;
  errorMessage: string;

  constructor(
    protected _as: AlertService,
    private _oogiri: OogiriService,
    private _cognito: CognitoService,
  ) { }

  ngOnInit() {
    // let timer = interval(1000);
    // timer.subscribe(() => this.getOogiries());
    this.getOogiries()
  }
//バックエンドからデータをとってくる。
  getOogiries() {
    this._oogiri.getOogiries()
      .subscribe(
        res => {
          this.oogiries = res
        }
      ),
      error => {
        console.log(error)
      }
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
