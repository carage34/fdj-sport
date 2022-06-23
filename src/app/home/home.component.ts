import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {League} from "../model/league.model";
import {Team} from "../model/team.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Leagues
  public leagues: League[] = [];

  // Equipes
  public teams: Team[] = []

  // Conditionne l'affichage du bloc erreur
  public error = false;
  constructor(private readonly homeService: HomeService, public readonly router: Router) { }

  ngOnInit(): void {
    // Récupération des leagues
    this.homeService.getLeagues().subscribe((leagues: League[]) => {
      this.leagues = leagues;
      this.error = false;
      console.log(this.leagues);
    },error => {
      this.error = true;
    })
  }

  /**
   * Affecte les équipes de la league selectionné
   * @param league league selectionné
   */
  displayLeague(league: League) {
    this.teams = league.teams;
  }
}
