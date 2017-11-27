import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { routing } from './routing';
import { GlobalComponent } from './global/global.component';
import { MaterialModule } from '../../utils/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [SearchComponent, EditComponent, GlobalComponent]
})
export class FeatureModule { }
