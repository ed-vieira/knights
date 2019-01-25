import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListKnightsComponent } from './list-knights/list-knights.component';
import{ ListHeroesComponent } from './list-heroes/list-heroes.component';
import{ GetKnightComponent } from './get-knight/get-knight.component';
import{ CreateKnightComponent } from './create-knight/create-knight.component';


const routes: Routes = [
  {path: 'list-knights', component: ListKnightsComponent},
  {path: 'list-heroes', component: ListHeroesComponent},
  {path: 'get-knight', component: GetKnightComponent},
  {path: 'create-knight', component: CreateKnightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
