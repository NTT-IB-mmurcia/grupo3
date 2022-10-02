import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailModuleRoutingModule } from './detail-module-routing.module';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { MapComponentComponent } from './components/map-component/map-component.component';


@NgModule({
  declarations: [
    DetailComponentComponent,
    MapComponentComponent,
  ],
  imports: [
    CommonModule,
    DetailModuleRoutingModule
  ]
})
export class DetailModuleModule { }
