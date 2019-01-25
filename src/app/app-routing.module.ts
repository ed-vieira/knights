import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ListKnightsComponent } from './list-knights/list-knights.component';
import{ ListHeroesComponent } from './list-heroes/list-heroes.component';
import{ GetKnightComponent } from './get-knight/get-knight.component';
import{ UpdateKnightComponent } from './update-knight/update-knight.component';
import{ DeleteKnightComponent } from './delete-knight/delete-knight.component';
import{ GetHeroComponent } from './get-hero/get-hero.component';
import{ CreateKnightComponent } from './create-knight/create-knight.component';


const routes: Routes = [
  {path: 'list-knights', component: ListKnightsComponent},
  {path: 'list-heroes', component: ListHeroesComponent},
  {path: 'get-knight/:id', component: GetKnightComponent},
  {path: 'update-knight/:id', component: UpdateKnightComponent},
  {path: 'get-hero/:id', component: GetHeroComponent},
  {path: 'delete-knight/:id', component: DeleteKnightComponent},
  {path: 'create-knight', component: CreateKnightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
