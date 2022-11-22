import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutCreateComponent } from './layout-create/layout-create.component';
import { LayoutListComponent } from './layout-list/layout-list.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutCreateComponent,
    LayoutListComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    ListFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
