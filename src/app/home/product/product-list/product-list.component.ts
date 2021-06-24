import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../service/http.service';
import { ProductDto } from '../../../models/product-dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  /** ProductDto
   * id: number
   * name: string
   * description: string
  /** 説明 */
  products: ProductDto[] = null;
  imagePath: any = "../../ii"
  sublists: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  title: string = 'hello';
  description: string = 'samplesamplesamplesamplesamplesamplesamplesamplesamp\
  lesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample';

  constructor(
    private httpservice: HttpService,
  ) { }

  ngOnInit() {
    // this.httpservice.list().subscribe((products: ProductDto[]) => {
    //   this.products = products;
    // });
  }

}
