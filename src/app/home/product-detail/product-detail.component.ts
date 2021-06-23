import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';

import { lists } from '../../../assets/mock/sublists';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

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
