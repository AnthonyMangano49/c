import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { TopbarComponent } from './core/topbar/topbar.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    DashboardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
