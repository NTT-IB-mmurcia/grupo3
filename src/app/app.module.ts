import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListModuleModule } from './list-module/list-module.module';
import { DetailModuleModule } from './detail-module/detail-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModuleModule,
    DetailModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
