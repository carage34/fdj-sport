import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../utils/custom-validator";
import {Notif} from "../model/notif.model";
import {LeagueService} from "../services/league.service";
import {TypeEnum} from "../enum/type-alert.enum";
import {PlayerService} from "../services/player.service";
import {TeamService} from "../services/team.service";
import { Team } from '../model/team.model';
import { CurrenciesEnum } from '../enum/currencies.enum';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit {
  public teamSelected: Team  = new Team();
  public currenciesEnum = CurrenciesEnum;
  playerForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    position: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    thumbnail: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    born: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    amount: new FormControl(0, [Validators.required]),
    currency: new FormControl(this.currenciesEnum.EUR, [Validators.required]),
  });
  public name: string = "";
  public notifs: Notif[] = [];
  public teams: Team[] = [];


  constructor(private readonly playerService: PlayerService, private readonly teamService: TeamService) {
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
      this.teamSelected = teams[0];
    })
  }

  ngOnInit(): void {

  }

  /**
   * return true si le champ contient des erreurs
   * @param field le champ du formulaire
   */
  public isErrorField(field: string) {
    return !this.playerForm.get(field)?.valid && this.playerForm.get(field)?.touched;
  }

  /**
   * Ajout du championnat en base
   */
  public submit() {
    this.notifs = [];
    const name = this.playerForm.get("name")?.value;
    const position = this.playerForm.get("position")?.value;
    const thumbnail = this.playerForm.get('thumbnail')?.value;
    const born = this.playerForm.get("born")?.value;
    const amount = this.playerForm.get("amount")?.value;
    const currency =  this.playerForm.get("currency")?.value;
    console.log(amount);
    console.log(this.teamSelected)
    console.log(currency)
    if(position && name && born && thumbnail && amount && currency) {
      this.playerService.addPlayer(name, position, born, thumbnail, this.teamSelected, amount, currency).subscribe(() => {
        const msg = `Le joueur ${name} a bien été ajouté`;
        this.notifs.push(new Notif(TypeEnum.SUCCESS, msg));
        this.playerForm.reset();
      }, (error) => {
        this.notifs.push(new Notif(TypeEnum.DANGER, error));
      })
    }
  }

}
