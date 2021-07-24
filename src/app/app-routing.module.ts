import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopPageComponent } from './top-page/top-page.component';
import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';

import { NotFoundComponent } from './error/not-found/not-found.component';
import { ExceptionErrorComponent } from './error/exception-error/exception-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: ExceptionErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
