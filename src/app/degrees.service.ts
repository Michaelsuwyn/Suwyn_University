
import {Component} from '@angular/core';

export class DegreesService {
    getCourses(){
       return [
        {name:"Applied Biological Sciences (Applied Biological Sciences)", about: "dhciuhsdiousduovvcjsdh", id: 0},
       {name: "Art History", about: 'what about now how about today', id: 1},
       {name: "Basic Business Core (BMED)", about: 'test3', id: 2},
        {name:"Biochemistry (Medicinal Chemistry)", about: 'test4', id: 3}, 
        {name:"Biomedical Engineering	", about: 'test4', id: 4},
        {name:"Chemical Engineering ", about: 'test5', id: 5},
        {name:"Information Systems, Business Intelligence ", about: 'test6', id: 6},
        {name:"Information Technology, Network Administration and Security ", about: 'test4', id: 7},
        {name:"Medical Studies	", about: 'test4', id: 8},
        {name:"Music ", about: 'test4', id: 9},
        {name:"Nursing	", about: 'test4', id: 10},
        {name:"Psychology	", about: 'test4', id: 11},
        {name:"Rangeland Ecology and Management" , about: 'test4', id: 12},
        {name:"Residential Landscape Design and Construction", about: 'test4', id: 13},
        {name:"Secondary Education (Biological Sciences)	", about: 'test4', id: 14},
        {name:"Social Work	", about: 'test4', id: 15},
        {name:"Sociology", about: 'test4', id: 16},
        {name:"Spanish", about: 'test4', id: 17},
        {name:"Statistics", about: 'test4', id: 18},
        {name:"Speech and Hearing Science", about: 'test4', id: 19},
        {name:"Technology Systems", about: 'test4', id: 20},
        {name:"Theatre Arts", about: 'test4', id: 21},
        {name:"Web Business", about: 'test4', id: 22},
        {name:"Welding Technology", about: 'test4', id: 23},
        {name:"Wildlife Ecology and Management", about: 'test4', id: 24}
    ];
    }
    
    getCourseId(reqId: number){
        let allCourses = this.getCourses();
        
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