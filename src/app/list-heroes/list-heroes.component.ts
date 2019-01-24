import { Component, OnInit } from '@angular/core';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {


  heroes:any = [];

  constructor(public knightsService: KnightsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getHeroes()
  }


  public getHeroes() {
    this.heroes = [];
    this.knightsService.getHeroes().subscribe((data: {}) => {
      console.log(data);
      this.heroes = data;
    });
  }




}
