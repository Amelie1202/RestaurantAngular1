import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Plat } from '../model/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http:HttpClient) { } 
  getAll(){
    return this.http.get<Plat[]>("http://localhost:8080/plats").pipe()
  }

  getOne(id:number){ 
return this.http.get<Plat>("http://localhost:8080/plats/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/plats/delete2/"+id).pipe() 
  }
  addNew(plat:Plat){

    return this.http.post("http://localhost:8080/plats", plat).pipe()  
  }

  update(plat:Plat, id:number){
    return this.http.put("http://localhost:8080/plats/"+id, plat).pipe() 
  }

  affecterCommande(idPlat: number, idCommande: number){
    return this.http.put("http://localhost:8080/plats/affecterCommande/"+idPlat+"/"+ idCommande,"").pipe()
  }
  affecterUser(idPlat: number, idUser: number){
    return this.http.put("http://localhost:8080/plats/affecterUser/"+idPlat+"/"+ idUser,"").pipe()
  }
}
