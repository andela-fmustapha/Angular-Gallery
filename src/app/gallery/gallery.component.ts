import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'gallery-thumbnails',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedImage: Image;

  constructor() { }

  ngOnInit() {
  }

  selectImage(image) {
    this.selectedImage = image;
  }

}
