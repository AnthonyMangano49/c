import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    //dashboard route is eager loaded through app-module
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //all other modules lazy loaded as needed
    { path: 'feature', loadChildren: '../features/feature-management/feature.module#FeatureModule' },
    //we've fallen through all routes, is there a 404 to show here?
    { path: '**', redirectTo: 'dashboard' },
  ];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

