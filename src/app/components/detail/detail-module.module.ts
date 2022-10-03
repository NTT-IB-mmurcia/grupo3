import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailModuleRoutingModule } from './detail-module-routing.module';
import { DetailComponentComponent } from './controllers/detail-component.component';
import { MapComponentComponent } from '../map/controllers/map-component.component';




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
