import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DegreesService } from './degrees.service';
import { AppComponent } from './app.component';
import { DegreesComponent } from './degrees.component';


import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MainComponent } from './main.component';
import { DegreesDetailsComponent } from './degreesdetails.component';
import { HomePageComponent } from './homepage.component';
import { AthleticsComponent } from './athletics.component';

const appRoutes: Routes = [
  //{path: 'degrees-details', component: DegreesDetailsComponent},
  {path: 'degrees-details/:id', component: DegreesDetailsComponent},
  {path: 'athletics', component: AthleticsComponent},
  {path: '', component: HomePageComponent}
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
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    DegreesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
