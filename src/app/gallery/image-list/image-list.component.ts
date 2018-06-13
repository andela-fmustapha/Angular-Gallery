import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from '../../models/image';

import { ImageService } from '../../services/image.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'gallery-image-list',
  templateUrl: './image-list.component.html',
  styles: [`a:visited {
    filter: grey;
    -webkit-filter: grayscale(1);
  }`]
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
    console.log(image, "selected-image")
    let selected = this.selectedEvent.emit(image);
    console.log(selected, "selected Image");
  }
}
