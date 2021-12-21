import {Component, Input, OnInit} from '@angular/core';
import {Story} from "../../../shared/models/story";

@Component({
  selector: 'app-top-story-item',
  templateUrl: './top-story-item.component.html',
  styleUrls: ['./top-story-item.component.scss']
})
export class TopStoryItemComponent implements OnInit {

  @Input() story!: Story;

  constructor() { }

  ngOnInit(): void {
  }

}
