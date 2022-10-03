import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListModuleRoutingModule } from './list-module-routing.module';
import { ListComponentComponent } from './controllers/list-component.component';
import { DetailModuleModule } from '../detail/detail-module.module';

@NgModule({
  declarations: [
    ListComponentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ListModuleRoutingModule,
    DetailModuleModule,
  ]
})
export class ListModuleModule { }
