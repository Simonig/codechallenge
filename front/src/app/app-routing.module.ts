import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BanksComponent} from "./banks/banks.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  { path: '', redirectTo: '/banks', pathMatch: 'full' },
  { path: 'banks', component: BanksComponent },
  { path: 'form', component: FormComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
