import { Component, OnInit } from '@angular/core';
import { KnightsService } from '../knights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-knight',
  templateUrl: './delete-knight.component.html',
  styleUrls: ['./delete-knight.component.css']
})
export class DeleteKnightComponent implements OnInit {

  knight: any; 

  constructor(private knightsService: KnightsService, 
              private route: ActivatedRoute, 
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.deleteKnight(this.route.snapshot.params['id']);
  }

  

  deleteKnight(id){
    this.knightsService.deleteKnight(id).subscribe((data: {}) => {
      this.router.navigate(['/list-heroes/']);
      console.log(data);
      this.knight = data;
    });
  }
  



}
