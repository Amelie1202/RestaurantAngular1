import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { Tables } from '../model/tables';
import { CommandeService } from '../service/commande.service';
import { TablesService } from '../service/tables.service';
import Swal from'sweetalert2';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
newCommande: Commande = new Commande();
listCommande: Commande[]=[];
listTables: Tables[]=[];
listResa: Reservation[]=[];

  constructor(private commandeService: CommandeService, private tablesService: TablesService, private reservationService: ReservationService) { }

  ngOnInit() {
    this.commandeService.getAll().subscribe(
      data => {
        this.listCommande = data;
      }
    );
    this.tablesService.getAll().subscribe(
      data => {
        this.listTables= data;
      }
    );
    this.reservationService.getAll().subscribe(
      data => {
        this.listResa= data;
      }
    );
  }
  addCommande() {
    this.commandeService.addNew(this.newCommande).subscribe(
      data => {
        if (data["idCommande"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Commande enregistrée',
  showConfirmButton: false,
  timer: 3000
})
        }

      }
    )
  }
}
