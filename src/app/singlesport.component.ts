import { Component } from '@angular/core';



@Component ({
    selector: "sport",
    template: `<h1>Test Here</h1> 
    <img src={{pic}} [ngStyle]="this.sportStyles()" />
    `

})
export class SingleSportComponent {
 pic: string;
hovered = false;

constructor(pic: string){
    this.pic = pic;
}

sportStyles() {
    
   if(this.hovered == false){
       return {
       'height': '400px', 
       'width': '400px',
       'padding': '10px 10px 20px 10px',
       'border': '1px solid #BFBFBF',
       'background-color': 'white',
       'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
       }
   }
   else {
       return {
           'height': '600px', 
           'width': '600px',
           'padding': '10px 10px 20px 10px',
           'border': '1px solid #BFBFBF',
           'background-color': 'white',
           'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
           }
       }
   }

   sportHover() {
      this.hovered = true;
      

   }
   sportUnhover(){
       this.hovered = false;
   }
       
   

}