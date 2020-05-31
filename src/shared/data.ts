export interface Data{
  id:number;
  date:Date;
  confirmed: number;
  deaths:number;
  recovered:number;
  confirmed_diff:number;
  deaths_diff:number;
  recovered_diff:number;
  last_update:Date;
  active:number;
  active_diff:number;
  fatality_rate:number;
  region:{
    iso:string;
    name:string;
    province:string;
    lat:number;
    long:number;
    cities:{

    }
  }
}


