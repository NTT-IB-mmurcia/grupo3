import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./list-module/list-module.module').then(m => m.ListModuleModule)},
  {path: ':id', loadChildren: () => import('./detail-module/detail-module.module').then(m => m.DetailModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
