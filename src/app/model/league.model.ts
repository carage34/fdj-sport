import {Team} from "./team.model";

export interface League {
  _id:number;
  name: string;
  sport: string;
  teams: Team[];
}
