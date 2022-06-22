import {Player} from "./player.model";

export interface Team {
  _id:number;
  name:string;
  players: Player[];
  thumbnail: string;
}
