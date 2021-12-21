import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StoriesService} from "./stories.service";
import {StoryParams} from "../shared/models/storyParams";
import {Story} from "../shared/models/story";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  @ViewChild("search") searchInput!: ElementRef;

  stories: Story[] = [];
  storyParams: StoryParams = new StoryParams();

  totalCount: number = 0;

  sortOptions: any[] = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Date Posted(Earlier)', value: 'dateAsc' },
    { name: 'Date Posted(Later)', value: 'dateDesc' }
  ]

  constructor(private storyService: StoriesService) { }

  ngOnInit(): void {
    this.getStories();
  }

  getStories() {
    this.storyService.getStories(this.storyParams).subscribe( value => {
      this.stories = value.data;
      this.totalCount = value.count;
      this.storyParams.pageSize = value.pageSize;
      this.storyParams.pageNumber = value.pageIndex;
    })
  }

  changeSort(event: any) {
    const element = event.currentTarget as HTMLInputElement
    this.storyParams.sort = element.value;
    this.getStories();
  }

  onPageChanged(event: any) {
    if(this.storyParams.pageNumber !== event) {
      this.storyParams.pageNumber = event;
      this.getStories();
    }
  }

  onSearch() {
    this.storyParams.search = this.searchInput.nativeElement.value;
    this.storyParams.pageNumber = 1;
    this.getStories();
  }

  onReset() {
    this.searchInput.nativeElement.value = '';
    this.storyParams = new StoryParams();
    this.getStories();
  }

}
