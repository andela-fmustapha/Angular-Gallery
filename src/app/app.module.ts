import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';

import { ImageService } from './services/image.service';
import { GithubPageComponent } from './github-page/github-page.component';
import { AboutComponent } from './about/about.component';
import { routes } from 'app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    GithubPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
