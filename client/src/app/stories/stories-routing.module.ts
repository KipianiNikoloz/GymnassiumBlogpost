import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StoriesComponent} from "./stories.component";
import {StoriesDetailComponent} from "./stories-detail/stories-detail.component";
import {UpdateStoryComponent} from "./update-story/update-story.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  { path: '', component: StoriesComponent},
  { path: ':id', component: StoriesDetailComponent },
  { path: 'update/:id', component: UpdateStoryComponent, canActivate: [AuthGuard]}
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
export class StoriesRoutingModule { }
