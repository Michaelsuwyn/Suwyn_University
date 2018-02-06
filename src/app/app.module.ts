import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';




import { DegreesService } from './degrees.service';
import { AppComponent } from './app.component';
import { DegreesComponent } from './degrees.component';


import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MainComponent } from './main.component';
import { DegreesDetailsComponent } from './degreesdetails.component';
import { HomePageComponent } from './homepage.component';
import { AthleticsComponent } from './athletics.component';
import { SportScheduleServie } from './SportSchedule.service';
import { SportScheduleComponent } from './sportschedule.component';
import { CarouselComponent } from './carousel.component';

const appRoutes: Routes = [
  {path: 'degrees-details/:id', component: DegreesDetailsComponent},
  {path: 'athletics', component: AthleticsComponent},
  {path: '', component: HomePageComponent},
  {path: 'sport-schedule/:id', component: SportScheduleComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    DegreesDetailsComponent,
    DegreesComponent,
    NavbarComponent,
    MainComponent,
    HomePageComponent,
    AthleticsComponent,
   SportScheduleComponent,
   CarouselComponent
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    CommonModule,
    Ng2CarouselamosModule
    
  ],
  providers: [
    DegreesService,
    SportScheduleServie
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
