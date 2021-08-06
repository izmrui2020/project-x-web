import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OogiriListComponent } from './oogiri/oogiri-list/oogiri-list.component';
import { OogiriDetailComponent } from './oogiri/oogiri-detail/oogiri-detail.component';
import { OogiriEditComponent } from './oogiri/oogiri-edit/oogiri-edit.component';
import { OogiriNewComponent } from './oogiri/oogiri-new/oogiri-new.component';
import { UserComponent } from './user/user/user.component';
import { UserControlComponent } from './user/user-control/user-control.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { AuthGuard } from '../account/guard/auth.guard';
import { Auth } from 'aws-amplify';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: OogiriListComponent },
      { path: 'oogiri/:oogiriId', component: OogiriDetailComponent },
      // auth
      { path: 'oogiri-new', component: OogiriNewComponent, canActivate: [AuthGuard] },
      { path: 'oogiri-edit', component: OogiriEditComponent, canActivate: [AuthGuard] },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
      // { path: 'user/add', component: UserControlComponent, canActivate: [AuthGuard] },
      // { path: 'user/edit/:id', component: UserControlComponent, canActivate: [AuthGuard] },
      { path: 'user/control', component: UserControlComponent, canActivate: [AuthGuard] },
      { path: 'user/new', component: UserNewComponent },

      { path: 'proposal/new', component: OogiriNewComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

