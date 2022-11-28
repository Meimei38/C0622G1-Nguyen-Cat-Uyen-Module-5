import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorPickComponent} from './color-pick/color-pick.component';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './article/like/like.component';
import {NavbarComponent} from './article/navbar/navbar.component';
import {FooterComponent} from './article/footer/footer.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProductCreateComponent} from './product_management/product-create/product-create.component';
import {ProductListComponent} from './product_management/product-list/product-list.component';
import { ProductEditComponent } from './product_management/product-edit/product-edit.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import {DictionaryRoutingRoutingModule} from "./dictionary/dictionary-routing/dictionary-routing-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CategoryCreateComponent } from './product_management/category/category-create/category-create.component';
import { CategoryEditComponent } from './product_management/category/category-edit/category-edit.component';
import { CategoryListComponent } from './product_management/category/category-list/category-list.component';
import {CategoryRootingModule} from "./product_management/category/category-rooting.module";
import {ProductRoutingModule} from "./product_management/product/product-routing.module";
import { TodoComponent } from './todo/todo.component';


/*an array that will eventually hold route definitions*/

/*const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
},{
  path: 'product/list/:index',
  component: ProductListComponent
},
  {path: 'product/create',
  component: ProductCreateComponent},
  {path: 'edit/:index',
  component: ProductEditComponent}]*/

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    RegisterComponent,
    LoginComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   /* DictionaryRoutingRoutingModule,*/
    RouterModule,
    HttpClientModule,
    /*   RouterModule.forRoot(routes),*/
  CategoryRootingModule,
  ProductRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule {
}
