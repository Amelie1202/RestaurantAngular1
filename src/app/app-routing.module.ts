import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path:"index",
    component:IndexComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"store",
    component:StoreComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },

  {
    path:"user",
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
