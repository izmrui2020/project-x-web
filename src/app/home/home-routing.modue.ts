import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component'
import { ProductDetailComponent } from './product/product-detail/product-detail.component'
import { PostComponent } from './post-api/post/post.component';
import { PostCatComponent } from './post-api/post-cat/post-cat.component';
import { ShowCatComponent } from './post-api/show-cat/show-cat.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { OogiriListComponent } from './oogiri/oogiri-list/oogiri-list.component';
import { OogiriDetailComponent } from './oogiri/oogiri-detail/oogiri-detail.component';
import { OogiriEditComponent } from './oogiri/oogiri-edit/oogiri-edit.component';
import { ProposalComponent } from './oogiri/proposal/proposal.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
      { path: 'detail/:id/edit', component: ProductEditComponent },
      { path: 'post', component: PostComponent },
      { path: 'post-cat', component: PostCatComponent },
      { path: 'post-cat/show-cat', component: ShowCatComponent },

      { path: 'oogiri', component: OogiriListComponent },
      { path: 'oogiri-detail', component: OogiriDetailComponent },
      { path: 'oogiri-edit', component: OogiriEditComponent },
      { path: 'proposal', component: ProposalComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

