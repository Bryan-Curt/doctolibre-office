import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoRdvComponent } from './info-rdv/info-rdv.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
// import { PractitionerPipe } from './practitioner.pipe';
import { DateStartPipe } from './date-start.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoRdvComponent,
    PriseRdvComponent,
    // PractitionerPipe,
    DateStartPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
