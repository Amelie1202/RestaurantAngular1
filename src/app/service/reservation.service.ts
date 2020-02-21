import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reservation } from '../model/reservation';
import { Tables } from '../model/tables';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Reservation[]>("http://localhost:8080/reservations").pipe()
  }

  getOne(id:number){ 
return this.http.get<Reservation>("http://localhost:8080/reservations/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete('http://localhost:8080/reservations/delete2/'+id).pipe() 
  }
  addNew(reservation: Reservation){

    return this.http.post("http://localhost:8080/reservations/", reservation).pipe()  
  }

  update(reservation:Reservation, id:number){
    return this.http.put("http://localhost:8080/reservations/"+id, reservation).pipe() 
  }

  affecterClient(idReservation: number, idClient: number){
    return this.http.put("http://localhost:8080/reservations/affecterClient/"+idReservation+"/"+ idClient,"").pipe()
  }

  affecterTables(idReservation: number, idTables: number){
    return this.http.put("http://localhost:8080/reservations/affecterTables/"+idReservation+"/"+ idTables,"").pipe()
  }
  
  findByDate(date: Date){
    return this.http.post<Reservation[]>("http://localhost:8080/reservations/getByDate/", date).pipe()
}
getTablesDipo(dateDebut: Date){
  return this.http.post<Tables[]>("http://localhost:8080/reservations/date/", dateDebut).pipe()
}
}
