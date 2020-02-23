import { Component, OnInit } from '@angular/core';
import { Tables } from '../model/tables';
import { TablesService } from '../service/tables.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affichertables',
  templateUrl: './affichertables.component.html',
  styleUrls: ['./affichertables.component.css']
})
export class AffichertablesComponent implements OnInit {
listTablesUser: Tables[] = [];
idUser: number;
  constructor(private tablesService: TablesService,private route: ActivatedRoute ) { 
    this.idUser = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.tablesService.findByUser(this.idUser).subscribe(
      data =>{
        this.listTablesUser = data;
      }
    )
  }

}
