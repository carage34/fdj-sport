import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CustomValidator } from '../utils/custom-validator';
import {HttpClient} from "@angular/common/http";
import {LeagueService} from "../services/league.service";
import {Notif} from "../model/notif.model"
import {TypeEnum} from "../enum/type-alert.enum";
@Component({
  selector: 'app-form-league',
  templateUrl: './form-league.component.html',
  styleUrls: ['./form-league.component.scss']
})
export class FormLeagueComponent implements OnInit {
  leagueForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    sport: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
  });
  public name: string = "";
  public notifs: Notif[] = [];
  constructor(private readonly leagueService: LeagueService) { }

  ngOnInit(): void {
  }

  /**
   * return true si le champ contient des erreurs
   * @param field le champ du formulaire
   */
  public isErrorField(field: string) {
    return !this.leagueForm.get(field)?.valid && this.leagueForm.get(field)?.touched;
  }

  /**
   * Ajout du championnat en base
   */
  public submit() {
    this.notifs = [];
    const name = this.leagueForm.get("name")?.value;
    const sport = this.leagueForm.get("sport")?.value;
    if(sport && name) {
      this.leagueService.addLeague(name, sport).subscribe(() => {
        const msg = `Le chmapionnat ${name} a bien été ajouté`;
        this.notifs.push(new Notif(TypeEnum.SUCCESS, msg));
        this.leagueForm.reset();
      }, (error) => {
        this.notifs.push(new Notif(TypeEnum.DANGER, error));
      })
    }
  }
}
