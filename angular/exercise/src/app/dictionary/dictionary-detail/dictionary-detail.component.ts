import {Component, OnInit} from "@angular/core";
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute} from "@angular/router";
import {IWord} from "../model/iword";


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: IWord;
  word: string;

  constructor( private _dictionaryService: DictionaryService,
               private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.word = this._activatedRoute.snapshot.params['word'];
    this.wordDetail = this._dictionaryService.findByWord(this.word);
    console.log(this.wordDetail);
  }

}
