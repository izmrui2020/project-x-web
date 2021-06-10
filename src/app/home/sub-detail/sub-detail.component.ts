import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { lists } from './sublists';

@Component({
  selector: 'app-sub-detail',
  templateUrl: './sub-detail.component.html',
  styleUrls: ['./sub-detail.component.scss']
})
export class SubDetailComponent implements OnInit {

  product

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = lists[+params.get('listsId')]
    })
  }

}
