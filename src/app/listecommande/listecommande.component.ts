import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-listecommande',
  templateUrl: './listecommande.component.html',
  styleUrls: ['./listecommande.component.css']
})
export class ListecommandeComponent implements OnInit {
  listCommande: Commande[] = [];

  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.commandeService.getAll().subscribe(
      data =>{
        console.log(data)
        this.listCommande = data;
       
      
      }
    )
  }
  delete(id:number){
    this.commandeService.deleteOne(id).subscribe(
      data =>{
        if(data==true){
          this.ngOnInit(); 
        }
        else {
          console.log("error")
        }
      }
    )
      }
}
