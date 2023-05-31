import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { YearsComponent } from './years/years.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MagazinesComponent,
    YearsComponent,
  ],
  imports: [
    [BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
    ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
