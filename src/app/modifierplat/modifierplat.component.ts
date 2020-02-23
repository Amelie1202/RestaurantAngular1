import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat';
import { PlatService } from '../service/plat.service';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';
@Component({
  selector: 'app-modifierplat',
  templateUrl: './modifierplat.component.html',
  styleUrls: ['./modifierplat.component.css']
})
export class ModifierplatComponent implements OnInit {
idPlat: number;
plat : Plat = new Plat();

  constructor(private platService: PlatService, private route: ActivatedRoute) {
    this.idPlat = parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
   this.platService.getOne(this.idPlat).subscribe(
     data => {
       this.plat = data;
     }
   ) 
  }
  update(){
    this.platService.update(this.plat,this.idPlat).subscribe(
      data => {
        if (data["idPlat"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Le plat est modifié',
  showConfirmButton: false,
  timer: 3000
})
        }

      }

      
    )
  }
}
