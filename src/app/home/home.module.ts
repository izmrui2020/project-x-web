//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//import { SidebarModule } from 'ng-sidebar';

import { HomeRoutingModule } from '../home/home-routing.modue';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../common/header/header.component';

//import { LoginComponent } from './account/login/login.component';
//import { SignUpComponent } from './account/sign-up/sign-up.component';

import { ExComponent } from '../home/ex/ex.component';
import { SubComponent } from './sub/sub.component';
import { SubDetailComponent } from './sub-detail/sub-detail.component';
import { PostComponent } from './post/post.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostCatComponent } from './post-cat/post-cat.component';
import { ShowCatComponent } from './show-cat/show-cat.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ExComponent,
    SubComponent,
    SubDetailComponent,
    PostComponent,
    PostShowComponent,
    PostCatComponent,
    ShowCatComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  //bootstrap: [HomeComponent]
  //exports:[ HomeComponent ]
})
export class HomeModule { }
