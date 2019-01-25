import { Component, OnInit, Input } from '@angular/core';
import {Knight} from '../models/Knight';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-knight',
  templateUrl: './create-knight.component.html',
  styleUrls: ['./create-knight.component.css']
})
export class CreateKnightComponent implements OnInit {

  constructor(private knightsService: KnightsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  @Input()
   knight: Knight={
     name: '',
     nickname: '',
     birthday:'',
     keyAttribute: '',
     isHero: false,
     
     attributes:{
      strenght: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
     },
     weapons:[{
         name: '',
         mod: 0,
         attr: '',
         equipped: false,
       }]

   };


 
   public knightAttr = [
       { key: 'strenght',  value: 0},
       { key: 'dexterity', value: 0},
       { key: 'constitution',value: 0},
       { key: 'intelligence', value: 0},
       { key: 'wisdom', value: 0},
       { key: 'charisma', value: 0}
    ];
   



    

    createKnight() {
      this.knightsService.addKnight(this.knight).subscribe((result) => { 
         this.router.navigate(['/list-knights/']);
      }, (err) => {
        console.log(err);
      });
    }

}
