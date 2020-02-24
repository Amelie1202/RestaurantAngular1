import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CommandePlat } from '../model/commandeplat';

@Injectable({
  providedIn: 'root'
})
export class CommandeplatService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<CommandePlat[]>("http://localhost:8080/commandesplats").pipe()
  }

  getOne(id:number){ 
return this.http.get<CommandePlat>("http://localhost:8080/commandesplats/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/commandesplats/delete2/"+id).pipe() 
  }
  addNew(commandeplat:CommandePlat){

    return this.http.post("http://localhost:8080/commandesplats", commandeplat).pipe()  
  }

  update(commandeplat:CommandePlat, id:number){
    return this.http.put("http://localhost:8080/commandesplats/"+id, commandeplat).pipe() 
  }

  
  
}
