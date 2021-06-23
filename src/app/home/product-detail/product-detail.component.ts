import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDto } from '../../models/product-dto';

import { lists } from '../../../assets/mock/sublists';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductDto = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.get_detail();
    }, 2000);
  }

  get_detail() {
    const id =
    this.route.paramMap.subscribe(params => {
      this.product = lists[+params.get('listId')] //[+params.get('listId')] = 0になる
      console.log("listId = ", this.product)
    })
  }

}
