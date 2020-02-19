import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import Swal from 'sweetalert2';
//import pour decoder le token
import * as jwt_decode from 'jwt-decode';
import {JwtHelperService} from"@auth0/angular-jwt";
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: User = new User();
  user = new User();
user2= new User();
tokendata;
token2; // le token decode
decodedToken;
helper = new JwtHelperService();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  addUser() {
    this.userService.addNew(this.newUser).subscribe(
      data => {
        if (data["idUser"] == null) {

        } else {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Inscription nouvel utilisateur',
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
            window.location.href = "http://localhost:4200/users"
          })
        }

      }
    )
  }
  authentification() { 
    this.userService.findByLogin(this.user).subscribe( //s'authentifier sur le site
      data => {
        if (data!=null) {
          localStorage.setItem("login", data['login']); //mettre dans le localstorage
          localStorage.setItem("mdp", data['mdp']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Connexion réussie',
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
            window.location.href = "#"
          })
        }
        else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Verifier vos identifiants',
            showConfirmButton: false,
            timer: 3000
          })
        }
      }
    )
    

  }

  authentificationtoken(){ //mettre le token dans le local storage
    this.userService.authentification2(this.user2).subscribe( //s'authentifier sur le site, attention utilisateur2 a mettre dans html
    data => {
      this.tokendata = data['token'];
      this.token2 = jwt_decode(this.tokendata); //decoder le token dans la console,
      console.log(this.token2)
      localStorage.setItem("token",this.tokendata)
        //localStorage.setItem("token", data['token']); //mettre dans le localstorage
        if (data!=null) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Connexion réussie',
          showConfirmButton: false,
          timer: 3000
        }).then((result) => {
          window.location.href = "#"
        })
      }
      else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Verifier vos identifiants',
          showConfirmButton: false,
          timer: 3000
        })
      }
    }
  )
  }

}
