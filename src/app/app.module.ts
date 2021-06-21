import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { Angular2TokenService } from 'angular2-token';
import { PostService } from './service/post.service';
import { HttpService } from './service/http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { TopPageComponent } from './top-page/top-page.component';

import { HomeModule } from './home/home.module'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    TopPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
 //   SidebarModule.forRoot()
  ],
  providers: [
    HttpService,
    PostService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent],
  })

export class AppModule { }
