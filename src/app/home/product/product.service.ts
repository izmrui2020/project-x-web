import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDto } from '../../models/product-dto';
import { lists } from '../../../assets/mock/sublists';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductDto[] = lists

  constructor() { }

  list(): Observable<ProductDto[]> {
    return of(this.products);
  }

  get(id: number): Observable<ProductDto> {
    return of(this.products[id]);
  }
}
