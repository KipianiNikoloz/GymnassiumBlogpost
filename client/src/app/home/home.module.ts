import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { BannerComponent } from './banner/banner.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { TopStoryItemComponent } from './top-stories/top-story-item/top-story-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    TopStoriesComponent,
    TopStoryItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
