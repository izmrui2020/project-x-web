import { Component, OnInit } from '@angular/core';

import { Oogiri } from '../../oogiri/oogiri-model';
import { UserService } from '../user.service';
import { CognitoService } from '../../../account/cognito.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user

  tmpOne: Oogiri = new Oogiri(1, 'title1', 'oogiri1', 'comment1', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
	tmpTwo: Oogiri = new Oogiri(2, 'title2', 'oogiri2', 'comment2', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')
	tmpThree: Oogiri = new Oogiri(3, 'title3', 'oogiri3', 'comment3', 'https://oogiri-images.s3.ap-northeast-1.amazonaws.com/test/sample5.png')

	myOogiries : Oogiri[] = [
		this.tmpOne,
		this.tmpTwo,
		this.tmpThree
	]

  //myOogiries: Oogiri[];

  constructor() { }

  delete(): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    // this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
  }

}
