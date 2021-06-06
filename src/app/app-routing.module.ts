import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopPageComponent } from './top-page/top-page.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { LoginComponent } from './account/login/login.component';

import { ExComponent } from './home/ex/ex.component';
import { ExceptionPageComponent } from './home/error/exception-page/exception-page.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'ex', component: ExComponent },
      { path: 'opps!', component: ExceptionPageComponent },
      { path: '404', component: PageNotFoundComponent },
    ]
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
