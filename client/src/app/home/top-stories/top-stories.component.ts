import { Component, OnInit } from '@angular/core';
import {StoryParams} from "../../shared/models/storyParams";
import {StoriesService} from "../../stories/stories.service";
import {Story} from "../../shared/models/story";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {

  stories!: Story[];

  storyParams: StoryParams = new StoryParams();

  constructor(private storyService: StoriesService) { }

  ngOnInit(): void {
    this.storyParams.pageSize = 3;
    this.storyParams.sort = 'dateDesc';

    this.storyService.getStories(this.storyParams).subscribe( value => {
      this.stories = value.data;
    })
  }

}
