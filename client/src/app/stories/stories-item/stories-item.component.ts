import {Component, Input, OnInit} from '@angular/core';
import {Story} from "../../shared/models/story";

@Component({
  selector: 'app-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.scss']
})
export class StoriesItemComponent implements OnInit {

  @Input() story!: Story;

  constructor() { }

  ngOnInit(): void {
  }

}
