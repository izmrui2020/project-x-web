//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SidebarModule } from 'ng-sidebar';

import { HomeRoutingModule } from '../home/home-routing.modue';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../common/header/header.component';

//import { LoginComponent } from './account/login/login.component';
//import { SignUpComponent } from './account/sign-up/sign-up.component';

import { ExComponent } from '../home/ex/ex.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ExComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  //providers: [],
  //bootstrap: [HomeComponent]
  //exports:[ HomeComponent ]
})
export class HomeModule { }
