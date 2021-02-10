import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGarageComponent } from './add-garage/add-garage.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailsAdComponent } from './details-ad/details-ad.component';
import { DetailsGarageComponent } from './details-garage/details-garage.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { EditGarageComponent } from './edit-garage/edit-garage.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LastAdsComponent } from './last-ads/last-ads.component';
import { ListeAdComponent } from './liste-ad/liste-ad.component';
import { ListeGarageComponent } from './liste-garage/liste-garage.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: '', component: ListeUserComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'detailsuser', component: DetailsUserComponent},
  {path: 'edituser/:id', component: EditUserComponent},
  {path: 'listegarage', component: ListeGarageComponent},
  {path: 'detailsgarage', component: DetailsGarageComponent},
  {path: 'editgarage/:id', component: EditGarageComponent},
  {path: 'listead', component: ListeAdComponent},
  {path: 'detailsad', component: DetailsAdComponent},
  {path: 'editad', component: EditAdComponent},
  {path: 'lastads', component: LastAdsComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'addgarage', component: AddGarageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
