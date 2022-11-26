import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "../dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {path: 'detail/:word', component: DictionaryDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingRoutingModule { }
