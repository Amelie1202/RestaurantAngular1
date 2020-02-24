import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { Tables } from '../model/tables';
import { CommandeService } from '../service/commande.service';
import { TablesService } from '../service/tables.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
newCommande: Commande = new Commande();
listCommande: Commande[]=[];
listTables: Tables[]=[];

  constructor(private commandeService: CommandeService, private tablesService: TablesService) { }

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
  }
  addCommande() {
    this.commandeService.addNew(this.newCommande).subscribe(
      data => {
        if (data["idCommande"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Commande affectée à une table',
  showConfirmButton: false,
  timer: 3000
})
        }

      }
    )
  }
}
