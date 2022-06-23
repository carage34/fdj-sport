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
  public teamURL = "teams"

  public getJoueurs(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${environment.baseUri}/${this.teamURL}/${teamId}`)
  }
}
