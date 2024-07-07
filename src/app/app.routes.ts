import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'mangas', component: MangaComponent, }
];
