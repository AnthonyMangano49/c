import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full'},
    { path: 'search', component: SearchComponent },
    { path: 'edit', component: EditComponent },
    { path: 'master', component: MasterComponent },
    { path: '**', redirectTo: 'search' },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);