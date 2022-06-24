import {Team} from "./team.model";

export class League {
  _id:number = 0;
  name: string = "";
  sport: string = "";
  teams: Team[] = [];

}
