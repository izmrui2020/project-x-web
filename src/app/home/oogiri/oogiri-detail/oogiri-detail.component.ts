import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Oogiri } from '../oogiri-model';

@Component({
  selector: 'app-oogiri-detail',
  templateUrl: './oogiri-detail.component.html',
  styleUrls: ['./oogiri-detail.component.scss']
})
export class OogiriDetailComponent implements OnInit {

  oogiries: Oogiri[] | undefined;

  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeId = this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
    })
  }

}
