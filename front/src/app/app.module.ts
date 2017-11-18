import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { AppRoutingModule }     from './app-routing.module';

import { BankComponent } from './bank/bank.component';
import { FormComponent } from './form/form.component';


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
    //HttpClientModule,

  ],
  providers: [/*BanksService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
