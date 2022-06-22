export interface Player {
  _id:number;
  born:Date;
  name:string;
  position:string;
  signin: {
    amount: number;
    currency: string
  },
  thumbnail: string;
}
