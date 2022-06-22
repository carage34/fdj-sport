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
  constructor() { }

  suggest() {
    this.suggestions = this.leagues.filter(league => league.name.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()));
    console.log(this.suggestions)
  }

  ngOnInit(): void {
  }


  isDisplayed() {
    return this.suggestions.length > 0 && this.searchText.trim() !== '';
  }

  selectLeague(league: League) {
    this.receiveLeague.emit(league);
  }

}
