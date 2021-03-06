//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeRoutingModule } from '../home/home-routing.modue';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationModule } from 'jw-angular-pagination';

import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../common/header/header.component';
import { OogiriNewComponent } from './oogiri/oogiri-new/oogiri-new.component';
import { OogiriListComponent } from './oogiri/oogiri-list/oogiri-list.component';
import { OogiriDetailComponent } from './oogiri/oogiri-detail/oogiri-detail.component';
import { OogiriEditComponent } from './oogiri/oogiri-edit/oogiri-edit.component';
import { UserComponent } from './user/user/user.component';
import { UserControlComponent } from './user/user-control/user-control.component';
import { UserNewComponent } from './user/user-new/user-new.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    OogiriListComponent,
    OogiriDetailComponent,
    OogiriEditComponent,
    OogiriNewComponent,
    UserComponent,
    UserControlComponent,
    UserNewComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    JwPaginationModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
