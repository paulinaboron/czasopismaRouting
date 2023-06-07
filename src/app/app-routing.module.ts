import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazinesComponent } from './magazines/magazines.component';
import { YearsComponent } from './years/years.component';

const routes: Routes = [
  { path: '', component: MagazinesComponent },
  { path: ':mag', component: YearsComponent },
  { path: ':mag/:year', component: YearsComponent },
  {path: '**', redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
