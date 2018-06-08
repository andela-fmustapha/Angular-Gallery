import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'gallery-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  images: any[] = [ 
  new Image('1','Rose Field','A field of roses','../../../assets/images/alyssa-stevenson-673787-unsplash.jpg',
  '../../../assets/images/alyssa-stevenson-673787-unsplash.jpg'),
  new Image('2','Rose Field',
  'A field of roses',
  '../../../assets/images/brooke-winters-579071-unsplash.png',
  '../../../assets/images/brooke-winters-579071-unsplash.jpg'),
  new Image('3','Rose Field',
  'A field of roses',
  '../../../assets/images/eniko-kis-688765-unsplash.png',
  '../../../assets/images/eniko-kis-688765-unsplash.jpg'),
  new Image('4','Rose Field',
  'A field of roses',
  '../../../assets/images/fidel-fernando-537757-unsplash.png',
  '../../../assets/images/fidel-fernando-537757-unsplash.jpg'),
  new Image('5','Rose Field',
  'A field of roses',
  '../../../assets/images/maja-petric-384957-unsplash.png',
  '../../../assets/images/maja-petric-384957-unsplash.jpg'),
  new Image('6','Rose Field',
  'A field of roses',
  '../../../assets/images/masaaki-komori-603924-unsplash.png',
  '../../../assets/images/masaaki-komori-603924-unsplash.jpg'),
  new Image('7','Rose Field',
  'A field of roses',
  '../../../assets/images/ronaldo-de-oliveira-690833-unsplash.png',
  '../../../assets/images/ronaldo-de-oliveira-690833-unsplash.jpg'),
  new Image('8','Rose Field',
  'A field of roses',
  '../../../assets/images/nong-vang-426975-unsplash.png',
  '../../../assets/images/nong-vang-426975-unsplash.jpg')  
];
  constructor() { }

  ngOnInit() {
    console.log()
  }

}
