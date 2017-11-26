import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../utils/material/material.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ])
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }