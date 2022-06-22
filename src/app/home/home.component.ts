import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {League} from "../model/league.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public leagues: League[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getLeagues().subscribe((leagues: League[]) => {
      this.leagues = leagues;
      console.log(this.leagues);
    })
  }

  displayLeague(league: League) {
    console.log(league);
  }

}
