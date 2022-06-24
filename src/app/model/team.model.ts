import {Player} from "./player.model";

export class Team {
  _id:number=0;
  name:string="";
  players: Player[]= [];
  thumbnail: string = "";
}
