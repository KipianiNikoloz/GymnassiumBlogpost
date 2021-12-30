import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../shared/models/author";
import {AuthorService} from "../author.service";
import {AccountService} from "../../login/account.service";
import {ToastrService} from "ngx-toastr";
import {StoriesService} from "../../stories/stories.service";
import {Story} from "../../shared/models/story";

@Component({
  selector: 'app-authors-detail',
  templateUrl: './authors-detail.component.html',
  styleUrls: ['./authors-detail.component.scss']
})
export class AuthorsDetailComponent implements OnInit {

  author!: Author;

  constructor(private route: ActivatedRoute, private authorService: AuthorService, public accountService: AccountService, private storyService: StoriesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor() {
    this.authorService.getAuthorWithStories(+(this.route.snapshot.paramMap.get("id") as string)).subscribe( value => {
      this.author = value;
    })
  }

  onDelete(story: Story) {
    this.storyService.deleteStory(story.name).subscribe( () => {
      this.author.stories.splice(this.author.stories.indexOf(story), 1);
      this.toastr.success("მოთხრობა წაიშალა!");
    })
  }

}
