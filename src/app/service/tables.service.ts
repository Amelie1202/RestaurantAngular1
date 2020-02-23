import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Tables } from '../model/tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Tables[]>("http://localhost:8080/tables").pipe()
  }

  getOne(id:number){ 
return this.http.get<Tables>("http://localhost:8080/tables/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/tables/delete2/"+id).pipe() 
  }
  addNew(tables:Tables){

    return this.http.post("http://localhost:8080/tables/", tables).pipe()  
  }

  update(tables:Tables, id:number){
    return this.http.put("http://localhost:8080/tables/"+id, tables).pipe() 
  }

  affecterUser(idTables: number, idUser: number){
    return this.http.put("http://localhost:8080/tables/affecterCommande/"+idTables+"/"+ idUser,"").pipe()
  }
  findByUser(idUser: number){
    return this.http.get<Tables[]>("http://localhost:8080/tables/byUser/"+idUser).pipe()
  }
  
}
