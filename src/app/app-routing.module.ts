import { AboutComponent } from './componennt/about/about.component';
import { WorldComponent } from './componennt/world/world.component';
import { CountriesComponent } from './componennt/countries/countries.component';
import { HomeComponent } from './componennt/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'world', component: WorldComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
