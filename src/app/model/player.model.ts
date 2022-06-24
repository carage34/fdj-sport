export class Player {
  _id:number = 0;
  born:string = "";
  name:string = "";
  position:string = "";
  signin: {
    amount: number;
    currency: string
  } = {amount:0, currency:""};
  thumbnail: string = "";
}
