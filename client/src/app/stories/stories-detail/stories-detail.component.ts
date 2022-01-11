import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StoriesService} from "../stories.service";
import {Story} from "../../shared/models/story";
import {AuthorService} from "../../authors/author.service";

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss']
})
export class StoriesDetailComponent implements OnInit {

  authorId!: number;
  story!: Story;

  constructor(private route: ActivatedRoute, private storyService: StoriesService, private authorService: AuthorService ) { }

  ngOnInit(): void {
    this.getStory();
  }

  getStory() {
    this.storyService.getStory(+(this.route.snapshot.paramMap.get("id") as string)).subscribe( value => {
      this.story = value;

      this.authorService.getAuthorWithName(this.story.author).subscribe( value => {
        this.authorId = value.id
      })
    })
  }

}
