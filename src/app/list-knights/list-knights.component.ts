import { Component, OnInit } from '@angular/core';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-knights',
  templateUrl: './list-knights.component.html',
  styleUrls: ['./list-knights.component.css']
})
export class ListKnightsComponent implements OnInit {


  public knights:any = [];
 

  constructor(private knightsService: KnightsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     this.getKnights();
   
  }




  public getKnights() {
    this.knights = [];
    this.knightsService.getKnights().subscribe((data: {}) => {
      console.log(data);
      this.knights = data;
    });
  }


}
