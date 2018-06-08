import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../models/image';

@Component({
  selector: 'gallery-image',
  templateUrl: './image.component.html',
  styles: [`
  img {
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
    margin-bottom: 20px;
  }
  
  img:hover {
    filter: grey;
    -webkit-filter: grayscale(1);
  }`
]
})
export class ImageComponent implements OnInit {
  @Input() image:Image;
  constructor() { }

  ngOnInit() {
  }

}
