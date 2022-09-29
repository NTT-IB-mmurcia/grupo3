import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailModuleRoutingModule } from './detail-module-routing.module';
import { DetailComponentComponent } from './detail-component/detail-component.component';


@NgModule({
  declarations: [
    DetailComponentComponent
  ],
  imports: [
    CommonModule,
    DetailModuleRoutingModule
  ]
})
export class DetailModuleModule { }
