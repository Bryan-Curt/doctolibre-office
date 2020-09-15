import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoRdvComponent } from './info-rdv/info-rdv.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoRdvComponent,
    PriseRdvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
