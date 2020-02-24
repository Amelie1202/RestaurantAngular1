import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../service/reservation.service';
import { Tables } from '../model/tables';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nbreResaPersonne: number;
  newReservation: Reservation = new Reservation();
  date: Date = new Date();
  horaire: Date = new Date();
  datedebut: Date = new Date();
  datefin: Date = new Date();
  tablesdipo: Tables[] = [];
  newClient: Client = new Client();
  idClientE: number;
  idClient: number;
  listReservation: Reservation[] = [];

  constructor(private reservationService: ReservationService, private clientService: ClientService) { }

  ngOnInit() {
  }

  valider() {
    this.datedebut = new Date(this.date + ' ' + this.horaire); //indiquer les horaires entree et de fin
    this.datefin = new Date(this.date + ' ' + this.horaire + 40);
    console.log(this.datedebut);
    console.log(this.datefin);

    this.reservationService.getTablesDipo(this.datedebut).subscribe(  // verifier parmi les tables trier lesquelles correspondent aux nbre de personne
      data => {
        this.tablesdipo = data;
        for (let i = 0; i < data.length; i++) {
          if (this.nbreResaPersonne <= data[i].nbreplace) { // chercher la table par rapport au nombre de place
            this.newReservation.tables = data[i];
            i = data.length; //arreter quand les places sont les mêmes
          }
        }
        this.newReservation.nbrepersonne = this.nbreResaPersonne; //faire correspondre les dates et le nbre de person de la réservation
        this.newReservation.dateDebut = this.datedebut;
        console.log(this.newReservation.dateDebut);

        this.newReservation.dateFin = this.datefin;
        console.log(this.newReservation.dateFin);
        console.log(this.newReservation)

        this.clientService.getByTel(this.newClient.telephone).subscribe(
          data => {
            console.log(data);
            if (data == null) {
              this.clientService.addNew(this.newClient).subscribe(
                data => {
                  this.clientService.getByTel(this.newClient.telephone).subscribe(
                    data => {
                      this.newReservation.client = data;
                      this.reservationService.addNew(this.newReservation).subscribe(
                        data => {

                          Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Votre réservation est bien enregistrée!',
                            showConfirmButton: true,
                            timer: 3000
                          }).then((result) => {
                            window.location.href = "http://localhost:4200/index"
                          })
                        }



                      )
                    }
                  )
                }
              )
            } else {
              this.newReservation.client = data;
              this.idClientE = this.newReservation.client.idClient;
              this.reservationService.findByDate(this.datedebut).subscribe(
                data => {
                  this.listReservation = data.filter(x => x.client.idClient == this.idClientE);
                  if (this.listReservation.length == 0) {
                    this.reservationService.addNew(this.newReservation).subscribe(
                      data => {
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Votre réservation est bien enregistrée!',
                          showConfirmButton: true,

                        })

                      }
                    )
                  }else{
                    Swal.fire({
                      position: 'top-end',
                      icon: 'error',
                      title: 'Vous avez déjà réservé cette table!',
                      showConfirmButton: true,

                    })


                  }
                }
              )

              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Aucune table disponible, merci de choisir une autre date',
                showConfirmButton: false,
                timer: 3000
              })
            }
          }
        )
      }
    )
  }
}
