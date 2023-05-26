import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { YearsComponent } from './years/years.component';

@NgModule({
  declarations: [
    AppComponent,
    MagazinesComponent,
    YearsComponent,
  ],
  imports: [
    [BrowserModule, FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
