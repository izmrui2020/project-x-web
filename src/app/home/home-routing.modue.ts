import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ExComponent } from '../home/ex/ex.component';
import { SubComponent } from '../home/sub/sub.component'
import { SubDetailComponent } from './sub-detail/sub-detail.component'
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: SubComponent },
      { path: 'ex', component: ExComponent },
      { path: 'detail/:id', component: SubDetailComponent },
      { path: 'post-cat', component: PostComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

