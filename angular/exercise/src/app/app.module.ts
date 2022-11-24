import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorPickComponent } from './color-pick/color-pick.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './article/like/like.component';
import { NavbarComponent } from './article/navbar/navbar.component';
import { FooterComponent } from './article/footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
