import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GithubPageComponent } from './github-page/github-page.component';
import { AboutComponent } from './about/about.component';
import { ModuleWithProviders, ModuleWithComponentFactories } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent},
  { path: 'github', 
  resolve : { url :'https://github.com/andela-fmustapha/Angular-Gallery'},
  component: GithubPageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);