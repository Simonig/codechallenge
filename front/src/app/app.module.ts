import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { AppRoutingModule }     from './app-routing.module';

import { BankComponent } from './bank/bank.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from "@angular/common/http";
import { BanksService } from "./banks.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    //HttpClientModule,
    BankComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [BanksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
