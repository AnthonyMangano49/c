import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRouting } from './routes';


@NgModule({
  imports: [appRouting],
  exports: [RouterModule]
})
export class RoutingModule { }
