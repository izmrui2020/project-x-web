import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
/* Configure Amplify resources */
Amplify.configure(awsconfig);

import { Angular2TokenService } from 'angular2-token';
import { PostService } from './service/post.service';
import { HttpService } from './service/http.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopPageComponent } from './top-page/top-page.component';
import { HomeModule } from './home/home.module';
import { CognitoComponent } from './account/cognito/cognito.component';
import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { ExceptionErrorComponent } from './common/exception-error/exception-error.component';
import { AlertComponent } from './common/_alert/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopPageComponent,
    CognitoComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundComponent,
    ExceptionErrorComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    // StoreModule,
    // EffectsModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    AmplifyAngularModule,
  ],
  providers: [
    HttpService,
    PostService,
    Angular2TokenService,
    AmplifyService,
  ],
  bootstrap: [AppComponent],
  })

export class AppModule { }
