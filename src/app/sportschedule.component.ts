import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SportScheduleServie } from './SportSchedule.service';





@Component({
    selector: 'sport-schedule',
    templateUrl: './sportschedule.component.html',
    providers: [
        SportScheduleServie
    ]
})
export class SportScheduleComponent{
    details;
   id;
   path;
  
   
constructor(private service: SportScheduleServie, private route: ActivatedRoute, private router: Router ){
    
   
}

 ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.details = this.service.getCourseId(this.id);
 
    }
}
