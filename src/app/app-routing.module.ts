import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PlayerComponent} from "./player/player.component";
import {FormLeagueComponent} from "./form-league/form-league.component";
import {FormTeamComponent} from "./form-team/form-team.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'team/:id', component: PlayerComponent},
  {path: 'add-league', component: FormLeagueComponent},
  {path: 'add-team', component: FormTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
