import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthorsComponent} from "./authors.component";
import {AuthorsDetailComponent} from "./authors-detail/authors-detail.component";

const routes: Routes = [
  { path: '', component: AuthorsComponent },
  { path: ':id', component: AuthorsDetailComponent}
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
