import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Commande[]>("http://localhost:8080/commandes").pipe()
  }

  getOne(id:number){ 
return this.http.get<Commande>("http://localhost:8080/commandes/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/commandes/delete2/"+id).pipe() 
  }
  addNew(commande:Commande){

    return this.http.post("http://localhost:8080/commandes", commande).pipe()  
  }

  update(commande:Commande, id:number){
    return this.http.put("http://localhost:8080/commandes/"+id, commande).pipe() 
  }

  affecterTables(idCommande: number, idTables: number){
    return this.http.put("http://localhost:8080/commandes/affecterTables/"+idCommande+"/"+ idTables,"").pipe()
  }
  
}
