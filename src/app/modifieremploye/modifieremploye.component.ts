import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-modifieremploye',
  templateUrl: './modifieremploye.component.html',
  styleUrls: ['./modifieremploye.component.css']
})
export class ModifieremployeComponent implements OnInit {
idUser: number;
user: User = new User();

  constructor(private userService: UserService, private route:ActivatedRoute) { 
    this.idUser = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.userService.getOne(this.idUser).subscribe(
      data => {
        this.user = data;
      }
    )
  }
  update(){
    this.userService.update(this.user,this.idUser).subscribe(
      data => {
        if (data["idUser"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Employé modifié',
  showConfirmButton: false,
  timer: 3000
})
        }

      }

      
    )
  }
}
