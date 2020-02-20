import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { TablesService } from '../service/tables.service';
import Swal from'sweetalert2';
import { Tables } from '../model/tables';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  newTables: Tables = new Tables();
 
 idRole=2;
  listUser: User[]=[];
 
  constructor(private userService: UserService, private tablesService: TablesService) { }

  ngOnInit() {
  this.userService.findByRole(this.idRole).subscribe(
    data =>{
      this.listUser = data;
    }
  )
  }
  addTables() {
    this.tablesService.addNew(this.newTables).subscribe(
      data => {
        if (data["idTables"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'La nouvelle table est affectée!',
  showConfirmButton: false,
  timer: 3000
}).then((result) => {
  window.location.href = "http://localhost:4200/tables" //pour rafraichir automatiquement la page
})
        }

      }
    )
  }
}
