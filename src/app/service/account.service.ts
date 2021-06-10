import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpService } from './http.service';

import { LoginUserDto } from './class-dto/login-user-dto';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  }

  constructor(
    private httpservice: HttpService,
    private http: HttpClient,
  ) { }

  // public login_work(email: string, password: string): Observable<LoginUserDto> {
  //   return this.http.get(this.httpservice.URL, this.httpservice.httpOptions)
  //   .pipe(
  //     catchError(this.httpservice.handleError)
  //   )
  // }

}
