import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customers",
    loadChildren: "./customers/customers.module#CustomersModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
