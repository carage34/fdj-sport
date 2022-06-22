import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {League} from "../model/league.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public  LeagueURL = "leagues";
  constructor(private readonly http: HttpClient) { }

  public getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${environment.baseUri}/${this.LeagueURL}`);
  }

  public getTeamsByLeague() {

  }
}
