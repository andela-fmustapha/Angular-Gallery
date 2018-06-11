import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'gallery-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input() selectedImage: Image;

  constructor() { }

  ngOnInit() {
    console.log(Image, "When DOM loads");
  }


}
