import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../utils/custom-validator";
import {Notif} from "../model/notif.model";
import {LeagueService} from "../services/league.service";
import {TypeEnum} from "../enum/type-alert.enum";
import {League} from "../model/league.model";
import {TeamService} from "../services/team.service";

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent implements OnInit {

  public leagueSelected: League | null = null;

  teamForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    thumbnail: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),

  });
  public name: string = "";
  public notifs: Notif[] = [];
  public leagues: League[] = [];
  constructor(private readonly leagueService: LeagueService, private readonly teamService: TeamService) {
    this.leagueService.getLeagues().subscribe((leagues:League[]) => {
      this.leagues = leagues;
      this.leagueSelected = leagues[0];
    }, (error) => {
      this.notifs.push(new Notif(TypeEnum.DANGER, error));
    })
  }

  /**
   * Récupération des leagues
   */
  ngOnInit(): void {

  }

  /**
   * return true si le champ contient des erreurs
   * @param field le champ du formulaire
   */
  public isErrorField(field: string) {
    return !this.teamForm.get(field)?.valid && this.teamForm.get(field)?.touched;
  }

  /**
   * Ajout du championnat en base
   */
  public submit() {
    this.notifs = [];
    const name = this.teamForm.get("name")?.value;
    const thumbnail = this.teamForm.get("thumbnail")?.value;
    if(thumbnail && name && this.leagueSelected) {
      this.teamService.addTeam(name, thumbnail, this.leagueSelected).subscribe(() => {
        const msg = `L'équipe ${name} a bien été ajouté`;
        this.notifs.push(new Notif(TypeEnum.SUCCESS, msg));
        this.teamForm.reset();
      }, (error) => {
        this.notifs.push(new Notif(TypeEnum.DANGER, error));
      })
    }
  }

}
