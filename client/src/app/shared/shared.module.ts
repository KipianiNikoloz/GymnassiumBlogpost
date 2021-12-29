import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/pager/pager.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports: [
    PagerComponent,
    PaginationModule,
    FormsModule
  ]
})
export class SharedModule { }
