import { Component, OnInit } from '@angular/core';
import { CommandePlat } from '../model/commandeplat';
import { Plat } from '../model/plat';
import { CommandeplatService } from '../service/commandeplat.service';
import { PlatService } from '../service/plat.service';
import Swal from 'sweetalert2';
import { Commande } from '../model/commande';
import { CommandeService } from '../service/commande.service';
import { ReservationService } from '../service/reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-commandeplat',
  templateUrl: './commandeplat.component.html',
  styleUrls: ['./commandeplat.component.css']
})
export class CommandeplatComponent implements OnInit {
  commandeplat: CommandePlat = new CommandePlat;
  commandeRecup: Commande = new Commande();
  listPlat: Plat[] = [];
  listCommandeplat: CommandePlat[] = [];
  plat: Plat ;
  platRecup : Plat = new Plat();
  commande: Commande = new Commande();
  commande1: Commande = new Commande();
  idCommande1: number;
  idCommande: number;
  idCommandeplat: number;
  idReservation: number;
  idResa: number;
  ReservationRecup: Reservation = new Reservation();
  listCommande: Commande[] = [];
  idplat: number;
  constructor(private commandePlatService: CommandeplatService, private platService: PlatService, private commandeService: CommandeService, private reservationService: ReservationService, private route: ActivatedRoute) {
    this.idResa = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {

    this.platService.getAll().subscribe(
      data => {
        this.listPlat = data;
      }
    );
    this.commandeService.getAll().subscribe(
      data => {
        this.listCommande = data;
      }
    );
    // this.reservationService.getOne(this.idReservation).subscribe(
    //   data => {
    //     this.ReservationRecup = data;
    //   })

    // this.commandeService.addNew(this.commande).subscribe(
    //   data =>{
    //     this.idCommande = data.idCommande
    //    console.log(this.idCommande)
    //   })
  }

  addCommandePlat() {
    this.platService.getOne(this.plat.idPlat).subscribe(
      data => {
        this.platRecup = data; 
        console.log(this.platRecup);
        console.log(this.commandeplat);
        this.commandeplat.plat = data;
        this.commandeplat.commande = this.commandeRecup;
        
        this.commandeplat.prix=data.prix;
        this.commandeplat.total=this.commandeplat.quantites * this.commandeplat.prix; 
        data.quantite = data.quantite - this.commandeplat.quantites;
        this.platService.update(data, data.idPlat).subscribe(
          data => { }
        )
        this.commandePlatService.addNew(this.commandeplat).subscribe(
          data => {
            if (data["idCommandePlat"] == null) {

            } else {

              console.log(this.commandeplat)

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Nouvelle commande!',
                showConfirmButton: false,
                timer: 3000
              })
            }

          }
        )

      }
    )





  }

  updatePrix(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.commandeplat.prix = 0;
      this.commandeplat.plat = '';
    } else {
      this.commandeplat.prix = this.listPlat[ctrl.selectedIndex].prix;
      this.commandeplat.plat = this.listPlat[ctrl.selectedIndex].nomPlat;
    }
  }

  updateTotal() {
    this.commandeplat.total = this.commandeplat.quantites * this.commandeplat.prix
    console.log(this.commandeplat.quantites)
    console.log(this.commandeplat.prix)
  }

  majPrix() {
    this.commandeplat.prix = this.plat.prix;
    console.log(this.plat.prix)
  }




  affecterCommande() {
    this.commandeService.getOne(this.idCommande).subscribe(
      data => {
        // this.commande.reservation=this.ReservationRecup;
        console.log(data);
      }
    )
  }
  // this.commandeService.getOne(this.idCommande).subscribe(
  //   data =>{
  //     this.commande.reservation=this.ReservationRecup;
  //     console.log(this.commande.reservation);
  //   }
  // )


  // this.commandeplat.commande = this.commande;
  // console.log(this.commandeplat.commande);
}
