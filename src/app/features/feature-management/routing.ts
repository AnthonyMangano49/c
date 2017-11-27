import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { GlobalComponent } from './global/global.component';

const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full'},
    { path: 'search', component: SearchComponent },
    { path: 'edit', component: EditComponent },
    { path: 'global', component: GlobalComponent },
    { path: '**', redirectTo: 'search' },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);