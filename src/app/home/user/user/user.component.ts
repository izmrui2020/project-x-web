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

  myOogiries: Oogiri[];

  constructor() { }

  delete(): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    // this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
  }

}
