import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthorsComponent} from "./authors.component";
import {AuthorsDetailComponent} from "./authors-detail/authors-detail.component";
import {AddAuthorComponent} from "./add-author/add-author.component";
import {AddStoryComponent} from "./add-story/add-story.component";
import {UpdateAuthorComponent} from "./update-author/update-author.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  { path: '', component: AuthorsComponent },
  { path: ':id', component: AuthorsDetailComponent },
  { path: ':id/add-story', component: AddStoryComponent, canActivate: [AuthGuard] },
  { path: 'admin/add', component: AddAuthorComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateAuthorComponent, canActivate: [AuthGuard] }
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
export class AuthorsRoutingModule { }
