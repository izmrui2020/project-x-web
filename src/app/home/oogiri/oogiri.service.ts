import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Oogiri } from './oogiri-model';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class OogiriService {
  private hosturi = environment.API_URL; //url: 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    private htservie: HttpService,
  ) { }

  getOogiries(): Observable<Oogiri[]> {
    return this.http.get(this.hosturi + "/oogiris").pipe(
      map((res = Response) => {
        return <Oogiri[]>res;
      }),
      //catchError(this.htservie.handleError)
    )

  }
  // .map((res = Response) => <Oogiri[]>res.json())
  // .catchError(this.htservie.handleError);

}
