import { Component, OnInit } from '@angular/core';
import { Tables } from '../model/tables';
import { TablesService } from '../service/tables.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-modifier-tables',
  templateUrl: './modifier-tables.component.html',
  styleUrls: ['./modifier-tables.component.css']
})
export class ModifierTablesComponent implements OnInit {
idTables: number;
tables: Tables = new Tables();
user= new User();
listUser: User[]=[];

  constructor(private tablesService: TablesService,private userService: UserService,private route: ActivatedRoute) { 
    this.idTables = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.tablesService.getOne(this.idTables).subscribe(
      data =>{
        this.tables = data;
      }
    );
    this.userService.getAll().subscribe(
      data => {
        this.listUser = data;
      }
    )
  }

  update(){
    this.tablesService.update(this.tables,this.idTables).subscribe(
      data => {
        if (data["idTables"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'La table est modifiée',
  showConfirmButton: false,
  timer: 3000
})
        }

      }

      
    )
  }
}
