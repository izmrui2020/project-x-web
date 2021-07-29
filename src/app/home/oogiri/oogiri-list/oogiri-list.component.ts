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

  tmpOne: Oogiri = new Oogiri(1, 'title1', 'oogiri1', 'comment1', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
	tmpTwo: Oogiri = new Oogiri(2, 'title2', 'oogiri2', 'comment2', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
	tmpThree: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpFore: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpFive: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpSix: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpSeven: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpEight: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpNine: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
  tmpTen: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')

	oogiries : Oogiri[] = [
		this.tmpOne,
		this.tmpTwo,
		this.tmpThree,
    this.tmpFore,
    this.tmpFive,
    this.tmpSix,
    this.tmpSeven,
    this.tmpEight,
    this.tmpNine,
    this.tmpTen,
	]
  pageOfItems: Array<any>;

  private token: string;
  //oogiries: Oogiri[];
  errorMessage: string;

  constructor(
    protected _as: AlertService,
    private _os: OogiriService,
    private _cs: CognitoService,
  ) { }

  ngOnInit() {
    // let timer = interval(1000);
    // timer.subscribe(() => this.getOogiries());
    this.getOogiries()
  }
  getOogiries() {
    return this.oogiries
    // this._os.getOogiries()
    //   .subscribe(
    //     result => {
    //       this.oogiries = result;
    //       console.log(result);
    //     });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
