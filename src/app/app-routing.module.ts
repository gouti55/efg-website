import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FarmationListComponent } from './components/farmation-list/farmation-list.component';
import { SeedsAvailabilityComponent } from './components/seeds-availability/seeds-availability.component';
import { ChemicalAvailabilityComponent } from './components/chemical-availability/chemical-availability.component';
import { MachinaryAvailabilityComponent } from './components/machinary-availability/machinary-availability.component';
import { GovtSchemesComponent } from './components/govt-schemes/govt-schemes.component';
import { FarmationComponent } from './components/farmation/farmation.component';
import { SeedAvailabilityDetailsComponent} from './components/seed-availability-details/seed-availability-details.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "farmation-list", component: FarmationListComponent },
  { path: "seeds-availability", component: SeedsAvailabilityComponent },
  { path: "chemical-availability", component: ChemicalAvailabilityComponent },
  { path: "machinary-availability", component: MachinaryAvailabilityComponent },
  { path: "govt-schemes", component: GovtSchemesComponent },
  {path: "farmation/:id", component: FarmationComponent},
  {path: "seed/:id", component: SeedAvailabilityDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
