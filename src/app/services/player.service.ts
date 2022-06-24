import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../model/team.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private readonly http: HttpClient) { }
  public playerURL = "players";
  public addURL = "add";

  public getPlayers(playerId: string): Observable<Team> {
    return this.http.get<Team>(`${environment.baseUri}/${this.playerURL}/${playerId}`)
  }

  public addPlayer(name: string, position: string, born:string, thumbnail:string, team: Team, amount: number, currency:string):Observable<any> {
    return this.http.post
    (`${environment.baseUri}/${this.playerURL}/${this.addURL}`, {amount: amount, currency: currency, name:name, position:position, born:born, thumbnail:thumbnail, teamId:team._id})
  }
}
