import { Component, OnInit } from '@angular/core';
import { Tables } from '../model/tables';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { TablesService } from '../service/tables.service';
@Component({
  selector: 'app-listetables',
  templateUrl: './listetables.component.html',
  styleUrls: ['./listetables.component.css']
})
export class ListetablesComponent implements OnInit {
  newTables: Tables = new Tables();
  tables = new Tables();
  user = new User();
  listTables: Tables[]=[];
  listUser: User[]=[];
  constructor(private userService: UserService, private tablesService: TablesService) { }

  ngOnInit() {
    this.tablesService.getAll().subscribe(
      data =>{
        console.log(data)
        this.listTables = data;
       
      
      }
    )
  }
  delete(id:number){
    this.tablesService.deleteOne(id).subscribe(
      data =>{
        if(data==true){
          this.ngOnInit(); 
        }
        else {
          console.log("error")
        }
      }
    )
      }
}
