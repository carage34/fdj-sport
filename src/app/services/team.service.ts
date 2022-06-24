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
  public updateURL = "update"
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

  /**
   * Récupère les infos d'une team
   * @param id
   */
  public getTeam(id: string): Observable<any> {
    return this.httpClient.get<Team>(`${environment.baseUri}/${this.teamURL}/${id}`);
  }

  /**
   * Mise à jour d'une team
   * @param name
   * @param thumbnail
   * @param league
   * @param idTeam
   * @param oldLeague
   */
  public updateTeam(name: string, thumbnail: string, league: League, idTeam: string, oldLeague:League): Observable<any> {
    return this.httpClient.post<Team>(`${environment.baseUri}/${this.teamURL}/${this.updateURL}/${idTeam}`, {name: name, thumbnail: thumbnail, leagueId: league._id, oldLeagueId:oldLeague._id});
  }

}

