import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import {AuthorsRoutingModule} from "./authors-routing.module";
import { AuthorsItemComponent } from './authors-item/authors-item.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorsItemComponent,
    AuthorsDetailComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule
  ],
})
export class AuthorsModule { }
