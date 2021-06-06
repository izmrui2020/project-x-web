import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ExceptionPageComponent } from './home/error/exception-page/exception-page.component';
import { TopPageComponent } from './top-page/top-page.component';
import { ExComponent } from './home/ex/ex.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ExceptionPageComponent,
    TopPageComponent,
    ExComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
