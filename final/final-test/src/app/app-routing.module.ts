import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {TicketCreateComponent} from "./ticket-create/ticket-create.component";
import {TicketEditComponent} from "./ticket-edit/ticket-edit.component";


const routes: Routes = [{path: 'ticket', component: TicketListComponent},
  {path: 'ticket/create', component: TicketCreateComponent},
  {path: 'ticket/edit/:id', component: TicketEditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
