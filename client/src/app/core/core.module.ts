import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule
  ],
  exports: [
    NavbarComponent,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
