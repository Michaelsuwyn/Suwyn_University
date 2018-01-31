import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { DegreesComponent} from './degrees.component';
import { NavbarComponent } from './navbar.component';
import { MainComponent } from './main.component';



@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DegreesComponent,
    NavbarComponent,
    MainComponent
  ],
 

})
export class HomePageComponent {
  title = 'Angular app';
  courses;
  logo;

  constructor(CoursesComponent: DegreesComponent){
    this.courses = CoursesComponent.courses;
    this.logo = "suwynuniversity.PNG";
  }
}



