import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListModuleModule } from './components/main/list-module.module';
import { DetailModuleModule } from './components/detail/detail-module.module';
import { HeaderBuscadorComponent } from './components/header/controllers/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBuscadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModuleModule,
    DetailModuleModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
