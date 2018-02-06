import { Component } from '@angular/core';

export class SportScheduleServie {

    getSchedules(){
        return [
            {id: 0, sport: "soccer", schedule: "Soccer schedule"},
            {id: 1, sport: "football", schedule: "football schedule"},
            {id: 2, sport: "baseball", schedule: "baseball schedule"},
            {id: 3, sport: "volleyball", schedule: "volleyball schedule"},
            {id: 4, sport: "hockey", schedule: "hockey schedule"},
            {id: 5, sport: "wrestling", schedule: "wrestling schedule"},

        ]
    }

    getCourseId(reqId: number){
        let allCourses = this.getSchedules();
        
        for(let i = 0; i<allCourses.length; i++){
            let found: any = allCourses[i];
            if(found.id == reqId ){
                console.log("You have been giving " + found)
                return found;
                
            }
            else {
                console.log("no Id match to your request");
            }
        }

    }
}