import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat';
import { PlatService } from '../service/plat.service';

@Component({
  selector: 'app-listeplat',
  templateUrl: './listeplat.component.html',
  styleUrls: ['./listeplat.component.css']
})
export class ListeplatComponent implements OnInit {
  listPlat: Plat[] = [];
  constructor(private platService: PlatService) { }

  ngOnInit() {
    this.platService.getAll().subscribe(
      data =>{
        console.log(data)
        this.listPlat = data;
       
      
      }
    )
  }
  delete(id:number){
    this.platService.deleteOne(id).subscribe(
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
