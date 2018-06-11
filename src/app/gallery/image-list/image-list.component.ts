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
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}
