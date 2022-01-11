import { Component, OnInit } from '@angular/core';
import {AddStory} from "../../shared/models/addStory";
import {StoriesService} from "../stories.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthorService} from "../../authors/author.service";

@Component({
  selector: 'app-update-story',
  templateUrl: './update-story.component.html',
  styleUrls: ['./update-story.component.scss']
})
export class UpdateStoryComponent implements OnInit {

  id!: number;
  baseName!: string;

  story: AddStory = {
    name: '',
    description: '',
    content: '',
    publishDate: '',
    authorId: 0
  }

  constructor(private storyService: StoriesService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getStory()
  }

  onSubmit() {
    this.storyService.updateStory(this.story, this.baseName).subscribe( () => {
      this.router.navigate(['/stories/' + this.id]);
      this.toastr.success("ნაწარმოები რედაქტირებულია");
    })
  }

  reset() {
    this.story.name = '';
    this.story.description = '';
    this.story.content = '';
    this.story.publishDate = '';
  }

  getStory() {
    this.id = +(this.route.snapshot.paramMap.get("id") as string);

    this.storyService.getStory(this.id).subscribe( value => {
      this.story.name = value.name;
      this.story.description = value.description;
      this.story.content = value.content;
      this.story.publishDate = new Date(value.publishDate).toISOString().split('T')[0];
      this.baseName = this.story.name

      this.authorService.getAuthorWithName(value.author).subscribe( response => {
        this.story.authorId = response.id;
      })

    })
  }

}
