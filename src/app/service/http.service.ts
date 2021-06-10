import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginUserDto } from './class-dto/login-user-dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
//環境変数からドメインをインスタンス化
  public URL = "https://......"

  constructor(
    private loguser: LoginUserDto,
  ) {

  }

  public login_work() {}




}
