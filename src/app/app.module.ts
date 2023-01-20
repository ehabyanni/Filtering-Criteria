import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPageComponent } from './Components/filter-page/filter-page.component';
import { FilterControlsComponent } from './miniComponents/filter-controls/filter-controls.component';
import { EmployeesComponent } from './miniComponents/employees/employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { JsonHtMLComponent } from './json-ht-ml/json-ht-ml.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPageComponent,
    FilterControlsComponent,
    EmployeesComponent,
    JsonHtMLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
