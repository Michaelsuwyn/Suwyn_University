import { Component } from '@angular/core';



@Component({
    selector: 'general-athletics',
    templateUrl: './athletics.component.html',
    
    

})

export class AthleticsComponent {

    hovered = false;
    hovered2 = false;
    hovered3 = false;
    hovered4 = false;
    hovered5 = false;
    hovered6 = false;
    
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
            'height': '500px', 
            'width': '500px',
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

    sportStyles2() {
     
        if(this.hovered2 == false){
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
                'height': '500px', 
                'width': '500px',
                'padding': '10px 10px 20px 10px',
                'border': '1px solid #BFBFBF',
                'background-color': 'white',
                'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
                }
            }
        }

    
    sportHover2() {
        this.hovered2 = true;
        
 
     }
     sportUnhover2(){
         this.hovered2 = false;
     }
        
     sportStyles3() {
     
        if(this.hovered3 == false){
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
                'height': '500px', 
                'width': '500px',
                'padding': '10px 10px 20px 10px',
                'border': '1px solid #BFBFBF',
                'background-color': 'white',
                'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
                }
            }
        }

    
    sportHover3() {
        this.hovered3 = true;
        
 
     }
     sportUnhover3(){
         this.hovered3 = false;
     }

     sportStyles4() {
     
        if(this.hovered4 == false){
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
                'height': '500px', 
                'width': '500px',
                'padding': '10px 10px 20px 10px',
                'border': '1px solid #BFBFBF',
                'background-color': 'white',
                'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
                }
            }
        }

    
    sportHover4() {
        this.hovered4 = true;
        
 
     }
     sportUnhover4(){
         this.hovered4 = false;
     }

     sportStyles5() {
     
        if(this.hovered5 == false){
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
                'height': '500px', 
                'width': '500px',
                'padding': '10px 10px 20px 10px',
                'border': '1px solid #BFBFBF',
                'background-color': 'white',
                'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
                }
            }
        }

    
    sportHover5() {
        this.hovered5 = true;
        
 
     }
     sportUnhover5(){
         this.hovered5 = false;
     }

     sportStyles6() {
     
        if(this.hovered6 == false){
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
                'height': '500px', 
                'width': '500px',
                'padding': '10px 10px 20px 10px',
                'border': '1px solid #BFBFBF',
                'background-color': 'white',
                'box-shadow': '0 4px 8px 2px rgba(0,0,0,0.4)'
                }
            }
        }

    
    sportHover6() {
        this.hovered6 = true;
        
 
     }
     sportUnhover6(){
         this.hovered6 = false;
     }
        
        
        
        

}

    

