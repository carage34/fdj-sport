import {TypeEnum} from "../enum/type-alert.enum";

export class Notif {
  type: TypeEnum = TypeEnum.DANGER;
  msg: string = "";

  constructor(type:TypeEnum, msg:string) {
    this.type=type;
    this.msg=msg
  }
}
