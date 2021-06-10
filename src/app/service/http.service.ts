import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginUserDto } from './class-dto/login-user-dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
//環境変数からドメインをインスタンス化
  public URL = "https://......"

  constructor(
    private http: HttpClient,
    private loguser: LoginUserDto,
  ) {

  }

  public login_work() {}

  public getlist() {

  }


}
