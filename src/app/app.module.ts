import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SidebarModule } from 'ng-sidebar';

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
    AppRoutingModule,
    HomeModule,
 //   SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
