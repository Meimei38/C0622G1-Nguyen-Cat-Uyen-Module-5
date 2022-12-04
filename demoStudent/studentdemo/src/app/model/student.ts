import {Class} from "./class";

export interface Student {
  id?: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  address: string;
  class: Class;
}
