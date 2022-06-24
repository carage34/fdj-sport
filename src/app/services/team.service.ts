import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {League} from "../model/league.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Team} from "../model/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public teamURL = "teams";
  public addURL = "add"
  constructor(private readonly httpClient: HttpClient) { }

  public addTeam(name: string, thumbnail: string, league: League): Observable<any> {
    console.log(league._id);
    return this.httpClient.post(`${environment.baseUri}/${this.teamURL}/${this.addURL}`, {name: name, thumbnail: thumbnail, leagueId: league._id})
  }

  /**
   * Récupère les teams
   * @return Observable<Team[]>
   */
  public getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${environment.baseUri}/${this.teamURL}`);
  }

  public getTeam(id: string): Observable<Team> {
    return this.httpClient.get<Team>(`${environment.baseUri}/${this.teamURL}/${id}`);
  }

}

