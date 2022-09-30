import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModuleRoutingModule } from './list-module-routing.module';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailModuleModule } from '../detail-module/detail-module.module';


@NgModule({
  declarations: [
    ListComponentComponent
  ],
  imports: [
    CommonModule,
    ListModuleRoutingModule,
    DetailModuleModule,
  ]
})
export class ListModuleModule { }
