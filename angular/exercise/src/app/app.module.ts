import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { ColorPickComponent } from './color-pick/color-pick.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './article/like/like.component';
import { NavbarComponent } from './article/navbar/navbar.component';
import { FooterComponent } from './article/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
