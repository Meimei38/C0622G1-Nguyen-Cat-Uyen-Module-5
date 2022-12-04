import {BusBrand} from "./bus-brand";

export interface Ticket {
  id?: number;
  cost: number;
  departure: string;
  destination:string;
  date: string;
  time: string;
  busBrand: BusBrand;
  quantity: number;

}
