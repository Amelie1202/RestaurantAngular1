import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Role } from '../model/role';
import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  idUser2: number;
  listUser: User[] = [];
  listRole: Role[] = [];
  idUser: number;
  // utilisateur= new Utilisateur();
  role = new Role();
  user: User = new User();
  idRole: number;

  constructor(private userService: UserService, private roleService: RoleService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      data => {
        this.listUser = data;
      }
    );
    this.roleService.getAll().subscribe(
      data => {
        this.listRole = data;
      }
    );
  }
  affecter() {
    this.userService.getOne(this.idUser2).subscribe( //on va chercher l id utilisateur
      data => {
        this.user = data;
        this.roleService.getOne(this.idRole).subscribe( // puis son role
          data => {
            this.user.role = data; // on associe le role a l'utilisateur
            this.userService.update(this.user, this.user.idUser).subscribe( // on affecte
              data => {
              }
            );

          }
        )
      }
    )
  }

}
