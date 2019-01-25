import { Component, OnInit, Input } from '@angular/core';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Knight } from '../models/Knight';

@Component({
  selector: 'app-update-knight',
  templateUrl: './update-knight.component.html',
  styleUrls: ['./update-knight.component.css']
})
export class UpdateKnightComponent implements OnInit {

  @Input()
  knight: any = { nickname: ''}; 



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


  updateNickname(){
      this.knightsService.updateKnight(this.route.snapshot.params['id'], this.knight).subscribe((result) => {
        this.router.navigate(['/list-knights/']);
      }, (err) => {
       console.log(err);
     });
  }






}
