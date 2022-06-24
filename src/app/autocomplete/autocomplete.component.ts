import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {League} from "../model/league.model";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() leagues: League[] = [];
  @Output() receiveLeague: EventEmitter<League> = new EventEmitter<League>()
  public suggestions: League[] = [];
  public searchText: string = "";
  public leagueSelected: League | null = null;
  constructor() { }

  /**
   * charge les suggestions au remplissage du champ
   */
  suggest() {
    this.suggestions = this.leagues.filter(league => league.name.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()));
  }

  ngOnInit(): void {
  }

  /**
   * Conditionne l'affichage des suggestions
   * @returns boolean
   */
  isDisplayed(): boolean {
    return this.suggestions.length > 0 && this.searchText.trim() !== '';
  }

  /**
   * clic sur une suggestion
   * @param league suggestion cliqué
   */
  selectLeague(league: League) {
    this.suggestions = [];
    this.searchText = league.name;
    this.receiveLeague.emit(league);
    this.leagueSelected = league;
  }
}
