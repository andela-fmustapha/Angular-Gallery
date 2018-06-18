import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from '../../models/image';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'gallery-image-list',
  templateUrl: './image-list.component.html',
  styles: [
]
})
export class ImageListComponent implements OnInit {
  images: any[] = [];
  selectedImage: any;

  @Output() selectedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image) {
   this.selectedEvent.emit(image);
  }
}
