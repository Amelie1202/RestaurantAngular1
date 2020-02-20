import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newUser: User = new User();
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
            window.location.href = "http://localhost:4200/user"
          })
        }

      }
    )
  }
}
