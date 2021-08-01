import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Oogiri } from '../../_models/oogiri-model';
import { User } from '../../_models/user-model';
import { UserService } from '../user.service';
import { CognitoService } from '../../../account/auth/cognito.service';
import Amplify, { Auth } from 'aws-amplify';
import amplify from '../../../../aws-exports';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  nickname: string;
  private token: string;
  users!: User[];
  user = [
    {
      name: 'alexxa',
      id: '12345'
    }
  ];

  tmpOne: Oogiri = new Oogiri(1, 'title1', 'oogiri1', 'comment1', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
	tmpTwo: Oogiri = new Oogiri(2, 'title2', 'oogiri2', 'comment2', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
	tmpThree: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')

	myOogiries : Oogiri[] = [
		this.tmpOne,
		this.tmpTwo,
		this.tmpThree
	]

  //myOogiries: Oogiri[];
  constructor(
    private _us: UserService,
    private _cognito: CognitoService,
  ) { }

  ngOnInit() {
    this.token = this._cognito.getIdToken();
    this.getMyData();
    this.currentAuthenticatedSession();
    this.nickname = localStorage.getItem(
      amplify.localstorageBaseKey = 'LastAuthUser'
    );
    return this.myOogiries
  }
  getMyData() {
    console.log('token', this.token);
    this._us.getUserOogiries(this.token);
  }

  currentAuthenticatedSession(): void {
    this._cognito.currentAuthenticatedSession()
    .subscribe(
      result => {
        console.log(result)
        this.nickname = result.username;
        console.log('nickname', this.nickname)
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(id: string) {
    const user = this.users.find(x => x.id === id);
    if (!user) return;
    //user.isDeletng = true;
    this._us.delete(id)
    .pipe(first())
    .subscribe(() =>
    this.users = this.users.filter(x => x.id !== id));
  }

}
