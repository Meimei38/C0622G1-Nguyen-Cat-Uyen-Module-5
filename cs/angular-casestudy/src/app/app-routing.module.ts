import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'customer/list', component:CustomerListComponent},
  {path:'customer/create', component: CustomerCreateComponent},
  {path:'customer/edit/:id', component: CustomerEditComponent},
  {path:'facility/list', component: FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
