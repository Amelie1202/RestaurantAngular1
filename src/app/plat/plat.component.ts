import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat';
import { Commande } from '../model/commande';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { CommandeService } from '../service/commande.service';
import { PlatService } from '../service/plat.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  newPlat: Plat = new Plat();
  plat = new Plat();
  commande = new Commande();
  user = new User();
  
  listCommande: Commande[]=[];
  listUser: User[]=[];
 
  user2 = new User();

  constructor(private userService: UserService, private commandeService: CommandeService, private platService: PlatService) { }

  ngOnInit() {
    this.commandeService.getAll().subscribe(
      data => {
        this.listCommande = data;
      }
    );
    this.userService.getAll().subscribe(
      data => {
        this.listUser= data;
      }
    );
   
  }

  addPlat() {
    this.platService.addNew(this.newPlat).subscribe(
      data => {
        if (data["idPlat"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Le plat est ajouté!',
  showConfirmButton: false,
  timer: 3000
}).then((result) => {
  window.location.href = "http://localhost:4200/plat" //pour rafraichir automatiquement la page
})
        }

      }
    )
  }

  affecterCommande() {
    this.platService.getOne(this.plat.idPlat).subscribe(
      data => {
        this.plat = data;
        this.plat.commande = this.commande.idCommande;
        console.log(this.plat);

        this.platService.affecterCommande(this.plat.idPlat, this.commande.idCommande).subscribe(
          data => {
          }
        );

      }
    )
  }

  affecterUser() {
    this.platService.getOne(this.plat.idPlat).subscribe(
      data => {
        this.plat = data;
        this.plat.user = this.user.idUser;
        console.log(this.plat);

        this.platService.affecterUser(this.plat.idPlat, this.user.idUser).subscribe(
          data => {
          }
        );

      }
    )
  }
}
