import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ExComponent } from '../home/ex/ex.component';
import { ProductListComponent } from './product-list/product-list.component'
import { SubDetailComponent } from './sub-detail/sub-detail.component'
import { PostComponent } from './post/post.component';
import { PostCatComponent } from './post-cat/post-cat.component';
import { ShowCatComponent } from './show-cat/show-cat.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'ex', component: ExComponent },
      { path: 'detail/:id', component: SubDetailComponent },
      { path: 'post', component: PostComponent },
      { path: 'post-cat', component: PostCatComponent },
      { path: 'post-cat/show-cat', component: ShowCatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

