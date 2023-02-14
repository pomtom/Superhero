import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { createComponent } from './SuperHero/create.component';
import { listComponent } from './SuperHero/list.component';

const routes: Routes = [
  { path: 'list', component: listComponent },
  { path: 'create', component: createComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
