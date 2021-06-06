import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ExComponent } from '../home/ex/ex.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'ex', component: ExComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

