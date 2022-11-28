import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import {ReactiveFormsModule} from "@angular/forms";


 const routes: Routes = [
   {path: 'category/list', component: CategoryListComponent},
   {path:'category/edit/:index', component: CategoryEditComponent},
   {path:'category/delete/:id', component: CategoryDeleteComponent},
 ]
@NgModule({
  declarations: [CategoryDeleteComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class CategoryRootingModule { }
