import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Oogiri } from '../oogiri/oogiri';

@Injectable({
  providedIn: 'root'
})
export class OogiriService {

  constructor(
    private http: HttpClient,
  ) { }

  getOogiries(): Observable<Oogiri[]> {
    return
  }

}
