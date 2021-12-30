import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Story} from "../../shared/models/story";
import {AccountService} from "../../login/account.service";
import {StoriesService} from "../stories.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.scss']
})
export class StoriesItemComponent implements OnInit {

  @Input() story!: Story;
  @Output() storyDeletedEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(public accountService: AccountService, private storyService: StoriesService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.storyService.deleteStory(this.story.name).subscribe( () => {
      this.storyDeletedEmitter.emit();
      this.toastr.success("მოთხრობა წაიშალა!")
    })
  }

}
