import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListKnightsComponent } from './list-knights/list-knights.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { GetKnightComponent } from './get-knight/get-knight.component';
import { CreateKnightComponent } from './create-knight/create-knight.component';
import { UpdateKnightComponent } from './update-knight/update-knight.component';


@NgModule({
  declarations: [
    AppComponent,
    ListKnightsComponent,
    ListHeroesComponent,
    GetKnightComponent,
    CreateKnightComponent,
    UpdateKnightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
