import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ListeemployeComponent } from './listeemploye/listeemploye.component';
import { RoleComponent } from './role/role.component';
import { ListeplatComponent } from './listeplat/listeplat.component';
import { Plat } from './model/plat';
import { PlatComponent } from './plat/plat.component';
import { CommandeComponent } from './commande/commande.component';
import { ListecommandeComponent } from './listecommande/listecommande.component';
import { TablesComponent } from './tables/tables.component';
import { ListetablesComponent } from './listetables/listetables.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListereservationComponent } from './listereservation/listereservation.component';


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
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"listeemploye",
    component:ListeemployeComponent
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"listeplat",
    component:ListeplatComponent
  },

  {
    path:"plat",
    component:PlatComponent
  },
  {
    path:"commande",
    component:CommandeComponent
  },
  {
    path:"listecommande",
    component:ListecommandeComponent
  },
  {
    path:"tables",
    component:TablesComponent
  },
  {
    path:"listetables",
    component:ListetablesComponent
  },
  {
    path:"inscription",
    component:InscriptionComponent
  },
  {
    path:"listereservation",
    component:ListereservationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
