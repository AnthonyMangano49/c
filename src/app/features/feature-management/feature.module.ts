import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { MasterComponent } from './master/master.component';
import { routing } from './routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SearchComponent, EditComponent, MasterComponent]
})
export class FeatureModule { }
