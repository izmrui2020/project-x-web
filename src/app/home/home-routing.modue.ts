import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ExComponent } from '../home/ex/ex.component';
import { SubComponent } from '../home/sub/sub.component'
import { SubDetailComponent } from './sub-detail/sub-detail.component'

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: '',
        component: SubComponent
      },
      { path: 'ex',
        component: ExComponent
      },
      { path: 'detail',
        component: SubDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

