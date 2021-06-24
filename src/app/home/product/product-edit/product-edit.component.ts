import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { ProductService } from '../product.service';
import { ProductDto } from '../../../models/product-dto';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm = this.fb.group({ // <= 変更
    id: [''],
    name: [''],
    description: [''],
  });

  product: ProductDto;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productservice: ProductService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productservice.get(params['id'])
        .subscribe((product: ProductDto) => {
          this.productForm.setValue({
            id: product.id,
            name: product.name,
            description: product.description,
          })
        });
    });
  }

  saveProduct(): void{
    const { id, name, description } = this.productForm.getRawValue(); // <= 追加
    this.productservice.update(new ProductDto(id, name, description));

    this.router.navigate(['/home', this.productForm.controls.id.value])
  }

}