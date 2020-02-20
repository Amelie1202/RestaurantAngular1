import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Role[]>("http://localhost:8080/roles").pipe()
  }

  getOne(id:number){ 
return this.http.get<Role>("http://localhost:8080/roles/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/roles/delete2/"+id).pipe() 
  }
  addNew(role: Role){

    return this.http.post("http://localhost:8080/roles/", role).pipe()  
  }

  update(role: Role, id:number){
    return this.http.put("http://localhost:8080/roles/"+id, role).pipe() 
  }

}
