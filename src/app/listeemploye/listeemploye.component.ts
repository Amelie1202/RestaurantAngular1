import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeemploye',
  templateUrl: './listeemploye.component.html',
  styleUrls: ['./listeemploye.component.css']
})
export class ListeemployeComponent implements OnInit {
  listUser: User[] = [];
  idRole=2;
  constructor(private userService: UserService) { }

  ngOnInit() {
   // this.userService.findByRole(this.idRole).subscribe(
     // data => {
      //  console.log(data)
     //   this.listUser = data;
      //}
    //)
    this.userService.getAll().subscribe(
      data =>{
        console.log(data)
        this.listUser = data;
       
      
      }
    )
  }

  delete(id:number){
    this.userService.deleteOne(id).subscribe(
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
