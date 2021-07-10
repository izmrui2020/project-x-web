import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopPageComponent } from './top-page/top-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  //{ path: 'home', component: HomeComponent },
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
