import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Client[]>("http://localhost:8080/clients").pipe()
  }

  getOne(id:number){ 
return this.http.get<Client>("http://localhost:8080/clients/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete('http://localhost:8080/clients/delete2/'+id).pipe() 
  }
  addNew(client: Client){

    return this.http.post("http://localhost:8080/clients/", client).pipe()  
  }

  update(client:Client, id:number){
    return this.http.put("http://localhost:8080/clients/"+id, client).pipe() 
  }
getByTel(client: Client){
  return this.http.post<Client[]>("http://localhost:8080/clients/Tel/", client).pipe()
}
}
