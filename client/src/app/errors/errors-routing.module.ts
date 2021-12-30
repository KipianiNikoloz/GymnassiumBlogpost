import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ServerErrorComponent} from "./server-error/server-error.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: 'server-error', component: ServerErrorComponent},
  { path: 'not-found', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorsRoutingModule { }
