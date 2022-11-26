import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService { private _words : Iword [] = [
  {word: "apple",mean:"quả táo"},
  {word:"pen", mean:"Bút"},
  {word:"book", mean:"Sách"},
]


  constructor() { }

  get words(): Iword[] {
    return this._words;
  }

  set words(value: Iword[]) {
    this._words = value;
  }
  getAll(){
    return this._words;
  }
  getMeanWordByIndex(index:number){
    return this._words[index];
  }
}
