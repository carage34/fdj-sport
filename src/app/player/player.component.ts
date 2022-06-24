import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Player} from "../model/player.model";
import {PlayerService} from "../services/player.service";
import {CurrenciesEnum} from "../enum/currencies.enum";
import {TeamService} from "../services/team.service";
import {Notif} from "../model/notif.model";
import {TypeEnum} from "../enum/type-alert.enum";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public id: string | null;
  public players: Player[] = [];
  public error = false;
  public notifs: Notif[] = []
  constructor(private route: ActivatedRoute, private playerService: PlayerService, private readonly teamService: TeamService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //Recupère l'id de l'équipe via l'URL
    if(this.id) {
      this.teamService.getTeam(this.id).subscribe((res: any) => {
        this.players = res.team.players;
      }, (error) => {
        this.notifs.push(new Notif(TypeEnum.DANGER, error));
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
