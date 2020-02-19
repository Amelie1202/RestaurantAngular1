import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>("http://localhost:8080/utilisateurs").pipe()
  }

  getOne(id:number){ 
return this.http.get<User>("http://localhost:8080/utilisateurs/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/utilisateurs/delete2/"+id).pipe() 
  }
  addNew(user: User){

    return this.http.post("http://localhost:8080/utilisateurs/", user).pipe()  
  }

  update(user:User, id:number){
    return this.http.put("http://localhost:8080/utilisateurs/"+id, user).pipe() 
  }

  findByLogin(user:User){
    return this.http.post("http://localhost:8080/utilisateurs/login/", user).pipe()
 }

 authentification2(user:User){
   return this.http.post("http://localhost:8080/utilisateurs/authentif/", user).pipe()
 }
 findByRole(idRole: number){
  return this.http.get<User[]>("http://localhost:8080/utilisateurs/byRole/"+idRole).pipe()
 }
}
