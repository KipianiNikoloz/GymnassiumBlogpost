import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";
import {StoriesService} from "../../stories/stories.service";
import {ActivatedRoute} from "@angular/router";
import {AddStory} from "../../shared/models/addStory";
import {Author} from "../../shared/models/author";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {

  id!: number;
  author!: Author;

  story!: AddStory;

  constructor(private authorService: AuthorService, private storyService: StoriesService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id")!;

    this.story = {
      name: '',
      description: '',
      content: '',
      publishDate: '',
      authorId: this.id
    }

    this.authorService.getAuthor(this.id).subscribe( value => {
      this.author = value;
    })
  }

  reset() {
    this.story = {
      name: '',
      description: '',
      content: '',
      publishDate: '',
      authorId: this.id
    }
  }

  onSubmit() {
    this.storyService.addStory(this.story).subscribe( () => {
      this.reset();
      this.toastr.success("ნაწარმოები დამატებულია!");
    })
  }

}
