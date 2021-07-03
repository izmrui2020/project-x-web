//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeRoutingModule } from '../home/home-routing.modue';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../common/header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PostComponent } from './post-api/post/post.component';
import { PostShowComponent } from './post-api/post-show/post-show.component';
import { PostCatComponent } from './post-api/post-cat/post-cat.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { OogiriNewComponent } from './oogiri/oogiri-new/oogiri-new.component';
import { OogiriListComponent } from './oogiri/oogiri-list/oogiri-list.component';
import { OogiriDetailComponent } from './oogiri/oogiri-detail/oogiri-detail.component';
import { OogiriEditComponent } from './oogiri/oogiri-edit/oogiri-edit.component';
import { ProposalComponent } from './oogiri/proposal/proposal.component';
import { ProposalShowComponent } from './oogiri/proposal-show/proposal-show.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    PostComponent,
    PostShowComponent,
    PostCatComponent,
    ProductEditComponent,
    OogiriListComponent,
    OogiriDetailComponent,
    OogiriEditComponent,
    ProposalComponent,
    OogiriNewComponent,
    ProposalShowComponent,
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
