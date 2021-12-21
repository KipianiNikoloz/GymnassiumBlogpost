import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StoriesService} from "../stories.service";
import {Story} from "../../shared/models/story";

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss']
})
export class StoriesDetailComponent implements OnInit {

  story!: Story;

  constructor(private route: ActivatedRoute, private storyService: StoriesService) { }

  ngOnInit(): void {
    this.getStory();
  }

  getStory() {
    this.storyService.getStory(+(this.route.snapshot.paramMap.get("id") as string)).subscribe( value => {
      this.story = value;
    })
  }

}
