import { Component, OnInit } from '@angular/core';
import { DegreesComponent } from './degrees.component';
import { DegreesService } from './degrees.service';
import { LocationStrategy } from '@angular/common';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';





@Component({
    selector: 'degrees-details',
    templateUrl: './degreesdetails.component.html',
    providers: [
        DegreesService
    ]
})
export class DegreesDetailsComponent{
    details;
   id;
   path;
  
   
constructor(private service: DegreesService, private route: ActivatedRoute, private router: Router ){
    
   
}

 ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.details = this.service.getCourseId(this.id);
 
    }
}















// ROUTER WORKING BUT ONLY BECAUSE SUBSTRING AND PARSE INT


// import { Component, OnInit } from '@angular/core';
// import { DegreesComponent } from './degrees.component';
// import { DegreesService } from './degrees.service';
// import { LocationStrategy } from '@angular/common';
// import {ActivatedRoute } from '@angular/router';




// @Component({
//     selector: 'degrees-details',
//     templateUrl: './degreesdetails.component.html',
//     providers: [
//         DegreesService
//     ]
// })
// export class DegreesDetailsComponent{
//     details;
//    id;
//    path;
  
   
// constructor(service: DegreesService, private url:LocationStrategy, private router: ActivatedRoute ){
//     //this.details = service.getCourses();
//     console.log( "params under here");

//     console.log( this.router.params);
//     console.log("params over this");
//     this.path = parseInt(this.url.path().substring(17, 100));
//     this.id = service.getCourseId(this.path);
    
//     console.log("The path is" + " " + this.path);
// }

// //  ngOnInit(){
// //     console.log(this.url.path())
// //     if(this.url.path() == "/degrees-details/2"){
// //         console.log("you are on 2");
// //     }
// //     else {
// //         console.log("not on 2");
// //     }
// //  }


// }






//Able to navigate paths and check to see if your on path 2


// import { Component, OnInit } from '@angular/core';
// import { DegreesComponent } from './degrees.component';
// import { DegreesService } from './degrees.service';
// import { LocationStrategy } from '@angular/common';




// @Component({
//     selector: 'degrees-details',
//     template: `
//     <nav-bar></nav-bar>
//     <h1> This is the Degrees Details </h1>
        
//         <ul>
//         <li *ngFor="let detail of details">{{detail.name}}</li>
//         </ul>
//     `,
//     providers: [
//         DegreesService
//     ]
// })
// export class DegreesDetailsComponent implements OnInit{
//     details;
   
   
// constructor(service: DegreesService, private url:LocationStrategy){
//     this.details = service.getCourses();
// }

//  ngOnInit(){
//     console.log(this.url.path())
//     if(this.url.path() == "/degrees-details/2"){
//         console.log("you are on 2");
//     }
//     else {
//         console.log("not on 2");
//     }
//  }


// }






// Able to navigate routes and change the params number


// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// import { DegreesComponent } from './degrees.component';
// import { DegreesService } from './degrees.service';





// @Component({
//     selector: 'degrees-details',
//     template: `
//     <nav-bar></nav-bar>
//     <h1> This is the Degrees Details </h1>
        
//         <ul>
//         <li *ngFor="let detail of details">{{detail.name}}</li>
//         </ul>
//     `,
//     providers: [
//         DegreesService
//     ]
// })
// export class DegreesDetailsComponent {
//     details;
   
   
// constructor(service: DegreesService){
//     this.details = service.getCourses();
// }




// }