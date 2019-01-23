import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListKnightsComponent} from './list-knights/list-knights.component'


const routes: Routes = [
  {path: 'list-knights', component: ListKnightsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
