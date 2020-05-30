import { AngularmaterailModule } from './modules/material/angularmaterail/angularmaterail.module';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navbar/header/header.component';
import { SideheaderComponent } from './navbar/sideheader/sideheader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componennt/home/home.component';
import { CountriesComponent } from './componennt/countries/countries.component';
import { WorldComponent } from './componennt/world/world.component';
import { AboutComponent } from './componennt/about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ZoneComponent } from './componennt/zone/zone.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideheaderComponent,
    HomeComponent,
    CountriesComponent,
    WorldComponent,
    AboutComponent,
    ZoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterailModule,
    FlexLayoutModule,
    HttpClientModule,
    GoogleChartsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ChartsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
