import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  condition: boolean;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("token")!=null){
      this.condition = false
    }else{
      this.condition = true
    }
  }
  deconnexion(){
    localStorage.removeItem('token');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Déconnexion réussie',
      showConfirmButton: false,
      timer: 3000
    }).then((result) => {
      window.location.href = "http://localhost:4200/index" //pour rafraichir automatiquement la page
    })
  }
}
