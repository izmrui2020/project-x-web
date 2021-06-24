import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { ProductDto } from '../../../models/product-dto';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: ProductDto;

  constructor(
    private router: Router,
    private productservice: ProductService,
  ) { }

  ngOnInit() {
    this.productservice.get(2).subscribe((product: ProductDto) => {
      this.product = product;
    })
  }

  saveProduct(): void{
    console.log(this.product);
    this.router.navigate(['/home'])
  }

}
