import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Image } from '../../../models/image';

@Component({
  selector: 'gallery-image',
  templateUrl: './image.component.html',
  styles: [`
  img {
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  img:hover {
    -ms-transform: (1.5);
    -webkit-transform: (1.5);
    transform: scale(1.05);
  }

  img:active {
    filter: grey;
    -webkit-filter: grayscale(1);
  }
  `]
})

export class ImageComponent implements OnInit {
  @Input() image: any;
  constructor() { }

  ngOnInit() {
  }
}
