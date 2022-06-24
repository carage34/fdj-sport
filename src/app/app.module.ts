import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { PlayerComponent } from './player/player.component';
import { FormLeagueComponent } from './form-league/form-league.component';
import { FormTeamComponent } from './form-team/form-team.component';
import { FormPlayerComponent } from './form-player/form-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutocompleteComponent,
    PlayerComponent,
    FormLeagueComponent,
    FormTeamComponent,
    FormPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
