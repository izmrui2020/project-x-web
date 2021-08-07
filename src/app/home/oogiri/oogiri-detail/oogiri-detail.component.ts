import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Oogiri } from '../../_models/oogiri-model';

@Component({
  selector: 'app-oogiri-detail',
  templateUrl: './oogiri-detail.component.html',
  styleUrls: ['./oogiri-detail.component.scss']
})
export class OogiriDetailComponent implements OnInit {

  oogiri: Oogiri[];

  id: number;
  routeId: any;

  constructor(
    private _ar: ActivatedRoute,
  ) { }

  ngOnInit() { //どうする？
    // const routeParams = this.route.snapshot.paramMap.get('oogiriId');
    // console.log('routeParams', routeParams)
    this.routeId = this._ar.params.subscribe(
      (params: any) => {
        this.id = +params['oogiriId'];
      }
    )
  }
///Oogiri Listで取得した配列から番号をとってきてその番号の配列を検索する。そこでヒットしたデータを乗っける。

}
