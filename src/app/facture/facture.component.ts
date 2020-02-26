import { Component, OnInit } from '@angular/core';
import { CommandePlat } from '../model/commandeplat';
import { CommandeplatService } from '../service/commandeplat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
idCommandePlat: number;
commandeplat: CommandePlat= new CommandePlat();

  constructor(private commandeplatService: CommandeplatService, private route: ActivatedRoute) { 
    this.idCommandePlat = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.commandeplatService.getOne(this.idCommandePlat).subscribe(
      data =>{
        this.commandeplat = data;
      }
    )
  }

}
