import {Component, OnInit} from '@angular/core';
import {League} from "../model/league.model";
import {Team} from "../model/team.model";
import {Router} from "@angular/router";
import {LeagueService} from "../services/league.service";
import {Notif} from "../model/notif.model";
import {TypeEnum} from "../enum/type-alert.enum";

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

  public notifs:Notif[] = [];

  constructor(private readonly leagueService: LeagueService, public readonly router: Router) { }
  ngOnInit(): void {
    // Récupération des leagues
    this.leagueService.getLeagues().subscribe((leagues: League[]) => {
      this.leagues = leagues;
    },error => {
      this.notifs.push(new Notif(TypeEnum.DANGER, error));
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
