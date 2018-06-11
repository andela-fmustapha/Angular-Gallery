import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'gallery-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  images: any[] = [];
  selectedImage: any;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    console.log(this.images, "<==images");
  }

  onSelect(image) {
    console.log(image, '<=Image');
    this.selectedImage = image;
    console.log("selectedImage", this.selectedImage);
  }
}
