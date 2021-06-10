import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: AccountService
  ) { }

  ngOnInit(): void {
  }

  // do_login(event) {
  //   this.http.login_work()

  // }

}
