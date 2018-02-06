
import {Component} from '@angular/core';
import {DegreesService} from './degrees.service';



@Component({
    selector: 'degrees',
    template: `
        <h2>{{title}}</h2>
            <ul>
                <li *ngFor="let course of courses" [ngStyle]="{'font-size': '24px'}">
                    <span>{{course.name}}</span>
                    <div [ngStyle]="{'height': '70px'}">
                        <a [routerLink]="['/degrees-details', course.id]">
                            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >Check it out</button>
                        </a>
                    </div>
                </li>
            </ul>

  

`


})
export class DegreesComponent {
    title = "List of Degrees";
    courses;
    test = "";
    
    


    constructor(service: DegreesService){
        this.courses = service.getCourses();
        
        
    }

}