import { Component, OnInit } from '@angular/core';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-get-hero',
  templateUrl: './get-hero.component.html',
  styleUrls: ['./get-hero.component.css']
})
export class GetHeroComponent implements OnInit {

  hero: any; 

  constructor(private knightsService: KnightsService, 
              private route: ActivatedRoute, 
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.getHero(this.route.snapshot.params['id']);
  }

  

  getHero(id){
    this.knightsService.getHero(id).subscribe((data: {}) => {
      console.log(data);
      this.hero = data;
    });
  }
  

  back(){
    this.location.back();
  }

}
