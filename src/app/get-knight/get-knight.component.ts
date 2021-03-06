import { Component, OnInit } from '@angular/core';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-get-knight',
  templateUrl: './get-knight.component.html',
  styleUrls: ['./get-knight.component.css']
})
export class GetKnightComponent implements OnInit {


  knight: any; 

  constructor(private knightsService: KnightsService, 
              private route: ActivatedRoute, 
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.getKnight(this.route.snapshot.params['id']);
  }

  

  getKnight(id){
    this.knightsService.getKnight(id).subscribe((data: {}) => {
      console.log(data);
      this.knight = data;
    });
  }
  

  back(){
    this.location.back();
  }



}
