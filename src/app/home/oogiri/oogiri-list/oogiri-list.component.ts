import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

import { Oogiri } from '../oogiri';
import { OogiriService } from '../oogiri.service';

@Component({
  selector: 'app-oogiri-list',
  templateUrl: './oogiri-list.component.html',
  styleUrls: ['./oogiri-list.component.scss']
})
export class OogiriListComponent implements OnInit {

  oogiries: Oogiri[];
  mode = "Observable"
  errorMessage: string;

  constructor(
    private oogirise: OogiriService,
  ) { }

  ngOnInit() {
    let timer = interval(1000);
    timer.subscribe(() => this.getOogiries());
  }


  getOogiries() {
    this.oogirise.getOogiries()
      .subscribe(
        res => this.oogiries = res,
        error => this.errorMessage = <any>error
      )
  }

}
