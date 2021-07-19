import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, interval } from 'rxjs';

import { Oogiri } from '../oogiri-model';
import { OogiriService } from '../oogiri.service';
import { CognitoService } from '../../../account/cognito.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-oogiri-list',
  templateUrl: './oogiri-list.component.html',
  styleUrls: ['./oogiri-list.component.scss']
})
export class OogiriListComponent implements OnInit {
  tmpOne = new Oogiri(1, 'title1', 'oogiri1', 'comment1', 'https://sample.com')
	tmpTwo: Oogiri = new Oogiri(2, 'title2', 'oogiri2', 'comment2', 'https://sample.com')
	tmpThree: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://sample.com')

	temps : Oogiri[] = [
		this.tmpOne,
		this.tmpTwo,
		this.tmpThree
	]


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
    // this._os.getOogiries()
    //   .subscribe(
    //     result => {
    //       this.oogiries = result;
    //       console.log(result);
    //     });
  }

}
