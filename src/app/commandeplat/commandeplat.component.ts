import { Component, OnInit } from '@angular/core';
import { CommandePlat } from '../model/commandeplat';
import { Plat } from '../model/plat';
import { CommandeplatService } from '../service/commandeplat.service';
import { PlatService } from '../service/plat.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-commandeplat',
  templateUrl: './commandeplat.component.html',
  styleUrls: ['./commandeplat.component.css']
})
export class CommandeplatComponent implements OnInit {
commandeplat: CommandePlat= new CommandePlat;
listPlat: Plat[]=[];
listCommandeplat: CommandePlat[]=[];
plat: Plat;

  constructor(private commandePlatService: CommandeplatService, private platService: PlatService) { }

  ngOnInit() {
    this.platService.getAll().subscribe(
      data => {
        this.listPlat = data;
      }
    );
  }
  addCommandePlat() {
    this.commandePlatService.addNew(this.commandeplat).subscribe(
      data => {
        if (data["idCommandePlat"]==null){

        }else {
           
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

  updatePrix(ctrl){
if (ctrl.selectedIndex == 0){
  this.commandeplat.prix = 0;
  this.commandeplat.plat = '';
}else{
  this.commandeplat.prix = this.listPlat[ctrl.selectedIndex].prix;
  this.commandeplat.plat = this.listPlat[ctrl.selectedIndex].nomPlat;
}
  }

  updateTotal(){
    this.commandeplat.total = this.commandeplat.quantites * this.commandeplat.prix
    console.log(this.commandeplat.quantites)
    console.log(this.commandeplat.prix)
  }

  majPrix() {
    this.commandeplat.prix=this.commandeplat.plat.prix;
  }
}
