import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListeGarageComponent } from './liste-garage/liste-garage.component';
import { DetailsGarageComponent } from './details-garage/details-garage.component';
import { EditGarageComponent } from './edit-garage/edit-garage.component';
import { ListeAdComponent } from './liste-ad/liste-ad.component';
import { DetailsAdComponent } from './details-ad/details-ad.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { StatsComponent } from './stats/stats.component';
import { LastAdsComponent } from './last-ads/last-ads.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { AddGarageComponent } from './add-garage/add-garage.component';
import { GarageFormComponent } from './forms/garage-form/garage-form.component';
import { AddAdComponent } from './add-ad/add-ad.component';
import { AdFormComponent } from './forms/ad-form/ad-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeUserComponent,
    AddUserComponent,
    DetailsUserComponent,
    EditUserComponent,
    ListeGarageComponent,
    DetailsGarageComponent,
    EditGarageComponent,
    ListeAdComponent,
    DetailsAdComponent,
    EditAdComponent,
    StatsComponent,
    LastAdsComponent,
    UserFormComponent,
    AddGarageComponent,
    GarageFormComponent,
    AddAdComponent,
    AdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
