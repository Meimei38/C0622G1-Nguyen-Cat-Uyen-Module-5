import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutCreateComponent } from './layout-create/layout-create.component';
import { LayoutListComponent } from './layout-list/layout-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutCreateComponent,
    LayoutListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
