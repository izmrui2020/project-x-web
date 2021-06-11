import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubComponent } from '../sub/sub.component';

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
    this.get_detail();
  }

  get_detail(): void {
    const id =
    this.route.paramMap.subscribe(params => {
      this.product = lists[+params.get('listId')]
      console.log("listId = ", lists)
    })
  }

}
