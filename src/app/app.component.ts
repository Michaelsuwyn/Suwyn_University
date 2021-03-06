import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { DegreesComponent} from './degrees.component';
import { NavbarComponent } from './navbar.component';
import { MainComponent } from './main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DegreesComponent,
    NavbarComponent,
    MainComponent
  ],
 

})
export class AppComponent {
  title = 'Angular app';
  courses;

  constructor(CoursesComponent: DegreesComponent){
    this.courses = CoursesComponent.courses;
  }
}



