import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListKnightsComponent } from './list-knights/list-knights.component';
import{ ListHeroesComponent } from './list-heroes/list-heroes.component';

const routes: Routes = [
  {path: 'list-knights', component: ListKnightsComponent},
  {path: 'list-heroes', component: ListHeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
