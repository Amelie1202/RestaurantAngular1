import { Component, OnInit } from '@angular/core';
import { CommandePlat } from '../model/commandeplat';
import { CommandeplatService } from '../service/commandeplat.service';
import { Commande } from '../model/commande';

@Component({
  selector: 'app-listecommandeplat',
  templateUrl: './listecommandeplat.component.html',
  styleUrls: ['./listecommandeplat.component.css']
})
export class ListecommandeplatComponent implements OnInit {
  listCommandeplat: CommandePlat[] = [];
  commandeplat: CommandePlat = new CommandePlat();
  constructor(private commandeplatService: CommandeplatService) {
    
   }

  ngOnInit() {
    this.commandeplatService.getAll().subscribe(
      data =>{
        console.log(data)
        this.listCommandeplat = data;
       
      
      }
    )
  }
  delete(id:number){
    this.commandeplatService.deleteOne(id).subscribe(
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
