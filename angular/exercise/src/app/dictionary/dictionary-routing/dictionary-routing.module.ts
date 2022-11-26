import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingRoutingModule } from './dictionary-routing-routing.module';
import {Routes} from "@angular/router";
import {DictionaryPageComponent} from "../dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "../dictionary-detail/dictionary-detail.component";

const routes: Routes = [{
  path: 'home',
  component: DictionaryPageComponent
}, {
  path: 'dictionary/detail/:index',
  component: DictionaryDetailComponent
}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DictionaryRoutingRoutingModule
  ]
})
export class DictionaryRoutingModule { }
