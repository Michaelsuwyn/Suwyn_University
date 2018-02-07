import { Component } from '@angular/core';


@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent {
    items: Array<any> = []
  
    constructor() {
      this.items = [
        { name: 'assets/carouselimages/suwynstate.jpg',},
        { name: 'assets/carouselimages/footballstate.jpg' },
        { name: 'assets/carouselimages/hockeystate.jpg' },
        { name: 'assets/carouselimages/ridgestate.jpg' },
        { name: 'assets/carouselimages/suwynmoonvalley.jpg' },
        { name: 'assets/carouselimages/one.jpg' },
        { name: 'assets/carouselimages/two.jpg' },
        { name: 'assets/carouselimages/three.jpg' },
        { name: 'assets/carouselimages/four.jpg' },
        { name: 'assets/carouselimages/five.jpg' },
        
        
      ]
    }
  }