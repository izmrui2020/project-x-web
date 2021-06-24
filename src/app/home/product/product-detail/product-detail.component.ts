import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDto } from '../../../models/product-dto';
import { ProductService } from '../product.service';

import { lists } from '../../../../assets/mock/sublists';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  mvId: number
  product: ProductDto = null;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getDetail();
    }, 2000);
  }

  getDetail() {
    this.route.params.subscribe((params: Params) => {
      this.productservice.get(params['id'])
        .subscribe((product: ProductDto) => {
          this.product = product;
          console.log('params', this.product)
          this.mvId = this.product['id']
        });
      });
    }
}
