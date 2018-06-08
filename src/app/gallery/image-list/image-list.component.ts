import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'gallery-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  image = new Image('1','Rose Field',
  'A field of roses',
  '../../../assets/images/alyssa-stevenson-673787-unsplash.png',
  '../../../assets/images/alyssa-stevenson-673787-unsplash.jpg');
  constructor() { }

  ngOnInit() {
  }

}
