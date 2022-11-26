import { Injectable } from '@angular/core';
import {IWord} from "./model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {word: 'dog', mean: 'con cún'},
    {word: 'cat', mean: 'con mèo'},
    {word: 'chicken', mean: 'con gà'},
    {word: 'duck', mean: 'con vịt'},
    {word: 'dragon', mean: 'con rồng'},
    {word: 'pig', mean: 'con lợn'}
  ];
  constructor() { }

  getWords() {
    return this.words;
  }

  findByWord(word: any) {
    for (let i = 0; i < this.words.length; i++) {
      if(this.words[i].word === word){
        return word;
      }
    }
    return undefined;
  }
}
