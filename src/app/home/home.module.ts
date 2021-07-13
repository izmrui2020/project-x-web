//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeRoutingModule } from '../home/home-routing.modue';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../common/header/header.component';

import { OogiriNewComponent } from './oogiri/oogiri-new/oogiri-new.component';
import { OogiriListComponent } from './oogiri/oogiri-list/oogiri-list.component';
import { OogiriDetailComponent } from './oogiri/oogiri-detail/oogiri-detail.component';
import { OogiriEditComponent } from './oogiri/oogiri-edit/oogiri-edit.component';
import { ProposalComponent } from '../test/proposal/proposal.component';
import { ProposalShowComponent } from '../test/proposal-show/proposal-show.component';
import { UserComponent } from './user/user/user.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    OogiriListComponent,
    OogiriDetailComponent,
    OogiriEditComponent,
    ProposalComponent,
    OogiriNewComponent,
    ProposalShowComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
