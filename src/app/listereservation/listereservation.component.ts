import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-listereservation',
  templateUrl: './listereservation.component.html',
  styleUrls: ['./listereservation.component.css']
})
export class ListereservationComponent implements OnInit {
listReservation: Reservation[]=[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getAll().subscribe(
      data =>{
        console.log(data)
        this.listReservation = data;
       
      
      }
    )
  }
  delete(id:number){
    this.reservationService.deleteOne(id).subscribe(
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
