import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivityTableComponent } from './activity-table/activity-table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule } from '@angular/router';
import {MatCard, MatCardModule} from '@angular/material/card';
import { ActivitiesTypeComponent } from './activities-type/activities-type.component';
import { ReactiveFormsModule} from '@angular/forms' 

@NgModule({
  declarations: [
    AppComponent,
    ActivityTableComponent,
    NavbarComponent,
    ActivityComponent,
    ActivitiesTypeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'random-activity', component: ActivityComponent},
      {path: 'activitiesType', component: ActivitiesTypeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
