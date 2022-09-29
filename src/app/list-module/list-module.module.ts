import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModuleRoutingModule } from './list-module-routing.module';
import { ListComponentComponent } from './list-component/list-component.component';


@NgModule({
  declarations: [
    ListComponentComponent
  ],
  imports: [
    CommonModule,
    ListModuleRoutingModule
  ]
})
export class ListModuleModule { }
