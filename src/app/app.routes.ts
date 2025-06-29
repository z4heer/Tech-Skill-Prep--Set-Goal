import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RolesDirectoryComponent } from './roles/roles.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'roles/:category', loadComponent: () => import('./roles/roles.component').then(m => m.RolesDirectoryComponent) }
];