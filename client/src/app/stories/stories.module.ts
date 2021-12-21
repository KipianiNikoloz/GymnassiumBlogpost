import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { StoriesItemComponent } from './stories-item/stories-item.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';
import {StoriesRoutingModule} from "./stories-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    StoriesComponent,
    StoriesItemComponent,
    StoriesDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoriesRoutingModule
  ],
  exports: [
    StoriesItemComponent
  ]
})
export class StoriesModule { }
