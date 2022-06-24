import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../utils/custom-validator";
import {Notif} from "../model/notif.model";
import {LeagueService} from "../services/league.service";
import {TypeEnum} from "../enum/type-alert.enum";
import {League} from "../model/league.model";
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../model/team.model";

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent implements OnInit {

  public leagueSelected: League | null = null;
  public teamId: string | null = "";
  public oldLeague: League = new League();
  teamForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),
    thumbnail: new FormControl('', [Validators.required, CustomValidator.noWhitespaceValidator]),

  });
  public name: string = "";
  public notifs: Notif[] = [];
  public leagues: League[] = [];
  public team: Team = new Team();
  constructor(private readonly leagueService: LeagueService, private readonly teamService: TeamService, private readonly route: ActivatedRoute) {
    this.teamId = this.route.snapshot.paramMap.get('id');


    if(this.teamId) {
      // Mode modification
      this.teamService.getTeam(this.teamId).subscribe((res: any) => {
        this.team = res.team;
        this.teamForm.patchValue({
          name: this.team.name,
          thumbnail: this.team.thumbnail
        })
        this.getLeagues(res.league[0]);
      })
    } else {
      // Mode création
      this.getLeagues(new League());
    }
  }


  ngOnInit(): void {

  }
  /**
   * Récupération des leagues
   */
  getLeagues(leagueAssociated: League) {
    this.leagueService.getLeagues().subscribe((leagues:League[]) => {
      this.leagues = leagues;
      if(!this.teamId) {
        this.leagueSelected = leagues[0];
      } else {
        this.oldLeague = leagueAssociated;
        this.leagueSelected = this.leagues.filter(league => league._id === leagueAssociated._id)[0];
      }

    }, (error) => {
      this.notifs.push(new Notif(TypeEnum.DANGER, error));
    })
  }

  /**
   * return true si le champ contient des erreurs
   * @param field le champ du formulaire
   */
  public isErrorField(field: string) {
    return !this.teamForm.get(field)?.valid && this.teamForm.get(field)?.touched;
  }

  /**
   * Ajout d'une team en base
   */
  public submit() {
    this.notifs = [];
    const name = this.teamForm.get("name")?.value;
    const thumbnail = this.teamForm.get("thumbnail")?.value;
    if(thumbnail && name && this.leagueSelected) {
      // Cas création team
      if(!this.teamId) {
        this.teamService.addTeam(name, thumbnail, this.leagueSelected).subscribe(() => {
          const msg = `L'équipe ${name} a bien été ajouté`;
          this.notifs.push(new Notif(TypeEnum.SUCCESS, msg));
          this.teamForm.reset();
        }, (error) => {
          this.notifs.push(new Notif(TypeEnum.DANGER, error));
        })
      } else {
        // Cas mise à jour
        this.teamService.updateTeam(name, thumbnail, this.leagueSelected, this.teamId, this.oldLeague).subscribe((res) => {
          const msg = `L'équipe ${name} a bien été mis à jour`;
          this.notifs.push(new Notif(TypeEnum.SUCCESS, msg));
        }, (error) => {
          this.notifs.push(new Notif(TypeEnum.DANGER, error));
        })
      }
    }
  }
}
