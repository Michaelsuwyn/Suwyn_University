import { Component } from '@angular/core';
import {SingleSportComponent} from './singlesport.component';


@Component({
    selector: 'general-athletics',
    templateUrl: './athletics.component.html',
    
    

})

export class AthleticsComponent {
   wrestling: SingleSportComponent = new SingleSportComponent("assets/wrestlingimage.jpg");
   soccer: SingleSportComponent = new SingleSportComponent("assets/soccerimage.jpg");

    hovered = false;
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

    

