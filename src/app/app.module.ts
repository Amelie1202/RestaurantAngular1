import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ListeemployeComponent } from './listeemploye/listeemploye.component';
import { RoleComponent } from './role/role.component';
import { HeaderempComponent } from './headeremp/headeremp.component';
import { ListeplatComponent } from './listeplat/listeplat.component';
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



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ProductsComponent,
    StoreComponent,
    UserComponent,
    HomeComponent,
    ListeemployeComponent,
    RoleComponent,
    HeaderempComponent,
    ListeplatComponent,
    PlatComponent,
    CommandeComponent,
    ListecommandeComponent,
    TablesComponent,
    ListetablesComponent,
    InscriptionComponent,
    ListereservationComponent,
    ModifierTablesComponent,
    ModifierplatComponent,
    AffichertablesComponent,
    ModifieremployeComponent,
    ModifiercommandeComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
