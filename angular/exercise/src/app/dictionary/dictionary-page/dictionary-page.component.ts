import { Component, OnInit } from '@angular/core';
import {Iword} from "../model/iword";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  words: Iword[] = [];

  constructor(private _dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAllDictionary();
  }


  getAllDictionary() {
    this.words = this._dictionaryService.getAll();
  }

}
