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
import { ModifierTablesComponent } from './modifier-tables/modifier-tables.component';
import { ModifierplatComponent } from './modifierplat/modifierplat.component';
import { AffichertablesComponent } from './affichertables/affichertables.component';
import { ModifieremployeComponent } from './modifieremploye/modifieremploye.component';
import { ModifiercommandeComponent } from './modifiercommande/modifiercommande.component';
import { MenuComponent } from './menu/menu.component';


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
  },
  {
    path:"modifierTables/:id",
    component:ModifierTablesComponent
  },

  {
    path:"modifierplat/:id",
    component:ModifierplatComponent
  },
  {
    path:"affichertables/:id",
    component:AffichertablesComponent
  },
  {
    path:"modifieremploye/:id",
    component:ModifieremployeComponent
  },
  {
    path:"modifiercommande/:id",
    component:ModifiercommandeComponent
  },
  {
    path:"menu",
    component:MenuComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
