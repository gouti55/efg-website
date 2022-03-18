import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScreensComponent } from './components/screens/screens.component'
import { FormsModule } from '@angular/forms';
import { FarmationListComponent } from './components/farmation-list/farmation-list.component';
import { SeedsAvailabilityComponent } from './components/seeds-availability/seeds-availability.component';
import { MachinaryAvailabilityComponent } from './components/machinary-availability/machinary-availability.component';
import { ChemicalAvailabilityComponent } from './components/chemical-availability/chemical-availability.component';
import { GovtSchemesComponent } from './components/govt-schemes/govt-schemes.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmationComponent } from './components/farmation/farmation.component';
import { SeedAvailabilityDetailsComponent } from './components/seed-availability-details/seed-availability-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ScreensComponent,
    FarmationListComponent,
    SeedsAvailabilityComponent,
    MachinaryAvailabilityComponent,
    ChemicalAvailabilityComponent,
    GovtSchemesComponent,
    HomeComponent,
    FarmationComponent,
    SeedAvailabilityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
