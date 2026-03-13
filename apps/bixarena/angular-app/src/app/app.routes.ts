import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('@sagebionetworks/bixarena/home').then((m) => m.routes),
  },
  {
    path: 'battle',
    loadChildren: () => import('@sagebionetworks/bixarena/battle').then((m) => m.routes),
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('@sagebionetworks/bixarena/leaderboard').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
