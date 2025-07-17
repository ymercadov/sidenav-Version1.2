import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},  
  {path:'dashboard', component:DashboardComponent},  
  {path:'products', component:ProductsComponent, data:{title: 'Products'}},  
  {path:'statistics', component:StatisticsComponent, data:{title: 'Statistics'}},  
  {path:'coupens', component:CoupensComponent, data:{title: 'Coupens'}}, 
  {path:'pages', component:PagesComponent, data:{title: 'Pages'}}, 
  {path:'media', component:MediaComponent, data:{title: 'Media'}},  
  {path:'settings', component:SettingsComponent, data:{title: 'Settings'}}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
