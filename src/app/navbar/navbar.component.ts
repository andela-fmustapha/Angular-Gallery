import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
      nav {
        background-color: cadetBlue;
        color: white; !important
      }  
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
