import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";
import {Iword} from "../model/iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  translatedWord: Iword;
  index: number;

  constructor(private _dictionaryService: DictionaryService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getMeanWord();

  }

  private getMeanWord() {
    this.index = this._activatedRoute.snapshot.params['index'];
    this.translatedWord = this._dictionaryService.getMeanWordByIndex(this.index);
  }
}
