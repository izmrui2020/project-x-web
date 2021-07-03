import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OogiriListComponent } from './oogiri/oogiri-list/oogiri-list.component';
import { OogiriDetailComponent } from './oogiri/oogiri-detail/oogiri-detail.component';
import { OogiriEditComponent } from './oogiri/oogiri-edit/oogiri-edit.component';
import { ProposalComponent } from './oogiri/proposal/proposal.component';
import { OogiriNewComponent } from './oogiri/oogiri-new/oogiri-new.component';
import { ProposalShowComponent } from './oogiri/proposal-show/proposal-show.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: OogiriListComponent },
      { path: 'oogiri-detail', component: OogiriDetailComponent },
      { path: 'oogiri-edit', component: OogiriEditComponent },
      { path: 'proposal', component: ProposalComponent },
      { path: 'proposal/new', component: OogiriNewComponent },
      { path: 'proposal/:id', component:ProposalShowComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

