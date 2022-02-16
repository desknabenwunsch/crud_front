import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DriverComponent } from './components/driver/driver.component';
import { ShowDriverComponent } from './components/driver/show-driver/show-driver.component';
import { AddEditDriverComponent } from './components/driver/add-edit-driver/add-edit-driver.component';

import { DriverApiService } from './services/driver-api.service'

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    ShowDriverComponent,
    AddEditDriverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DriverApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
