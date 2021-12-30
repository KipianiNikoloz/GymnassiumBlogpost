import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { AuthorsComponent } from './authors.component';
import {AuthorsRoutingModule} from "./authors-routing.module";
import { AuthorsItemComponent } from './authors-item/authors-item.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';
import {SharedModule} from "../shared/shared.module";
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';

@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorsItemComponent,
    AuthorsDetailComponent,
    AddAuthorComponent,
    AddStoryComponent,
    UpdateAuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule
  ]
})
export class AuthorsModule { }
