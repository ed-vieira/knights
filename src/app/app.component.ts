import { Component, OnInit } from '@angular/core';
import { KnightsService } from './knights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'knights';
  
  ngOnInit(): void {
   
  }
 
  
}
