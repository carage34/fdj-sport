import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {League} from "../model/league.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  public  LeagueURL = "leagues";
  public addURL = "add"
  constructor(private readonly http: HttpClient) {}

  /**
   * Récupère les leagues
   * @return Observable<League[]>
   */
  public getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${environment.baseUri}/${this.LeagueURL}`);
  }

  public addLeague(name: string, sport: string) {
    return this.http.post(`${environment.baseUri}/${this.LeagueURL}/${this.addURL}`, {name:name, sport: sport});
  }


}
