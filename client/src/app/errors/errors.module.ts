import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ErrorsRoutingModule} from "./errors-routing.module";

@NgModule({
  declarations: [
    ServerErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
