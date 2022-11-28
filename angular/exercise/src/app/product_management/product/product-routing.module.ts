import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductCreateComponent} from "../product-create/product-create.component";
import {ProductEditComponent} from "../product-edit/product-edit.component";


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
},{
  path: 'product/list/:index',
  component: ProductListComponent
},
  {path: 'product/create',
    component: ProductCreateComponent},
  {path: 'edit/:index',
    component: ProductEditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
