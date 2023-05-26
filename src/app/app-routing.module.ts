import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
const routes: Routes = [
  // {path: 'dwor', component: DworComponent},
  // {path: 'bacowka/:id', component: BacowkaComponent}, //parametr
  // {path: 'bacowka', component: BacowkaComponent},
  // {path: '', redirectTo:"/bacowka", pathMatch: "full"}, //przekierowanie
  {path: '**', component: AppComponent} //wildcard
];
imports: [RouterModule.forRoot(routes), CommonModule]
exports: [RouterModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
