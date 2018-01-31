import { Component } from '@angular/core';



@Component({
    selector: 'nav-bar',
    template: `<nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
    <a class="navbar-brand" routerLink="/" routerLinkActive="active">HomePage</a>

      </div>
      <ul class="nav navbar-nav">
        <li> <a routerLink="/athletics" routerLinkActive="active">Athletics</a></li>
        <li><a routerLink="/" routerLinkActive="active">DegreesDetails</a></li>
        <li><a routerLink="/" routerLinkActive="active">HomePage</a></li>
        <li><a routerLink="/" routerLinkActive="active">HomePage</a></li>
      </ul>
    </div>
  </nav>`
})
export class NavbarComponent {

}