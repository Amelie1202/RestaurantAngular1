import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { CommandeService } from '../service/commande.service';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';
import { Tables } from '../model/tables';
import { TablesService } from '../service/tables.service';

@Component({
  selector: 'app-modifiercommande',
  templateUrl: './modifiercommande.component.html',
  styleUrls: ['./modifiercommande.component.css']
})
export class ModifiercommandeComponent implements OnInit {
idCommande:number;
commande: Commande = new Commande();
listTables: Tables[]=[];

  constructor(private commandeService: CommandeService, private tablesService: TablesService, private route: ActivatedRoute) { 
    this.idCommande = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.commandeService.getOne(this.idCommande).subscribe(
      data =>{
        this.commande = data;
      }
    );
    this.tablesService.getAll().subscribe(
      data => {
        this.listTables= data;
      }
    );
  }
  update(){
    this.commandeService.update(this.commande,this.idCommande).subscribe(
      data => {
        if (data["idCommande"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'La commande est modifiée!',
  showConfirmButton: false,
  timer: 3000
})
        }

      }

      
    )
  }
}
