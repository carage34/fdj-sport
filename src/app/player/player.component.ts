import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../model/player.model";
import {PlayerService} from "../services/player.service";
import {Team} from "../model/team.model";
import {CurrenciesEnum} from "../enum/currencies.enum";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public id: string | null;
  public players: Player[] = [];
  public error = false;
  constructor(private route: ActivatedRoute, private playerService: PlayerService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //Recupère l'id de l'équipe via l'URL
    if(this.id) {
      this.playerService.getJoueurs(this.id).subscribe((team: Team) => {
        this.players = team.players;
        this.error = false;
      }, (error) => {
        this.error = true;
      })
    }
  }


  /**
   * Renvoie le symbole associé à la monnaie
   * @param currency
   */
  public getCurrencySymbol(currency: string) {
    let symbol = '';
    switch(currency) {
      case CurrenciesEnum.EUR: {
        symbol = '€';
        break;
      }
      case CurrenciesEnum.GPP: {
        symbol = '£';
        break;
      }
    }
    return symbol;
  }
}
