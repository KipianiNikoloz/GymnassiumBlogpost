import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../../shared/models/author";

@Component({
  selector: 'app-authors-item',
  templateUrl: './authors-item.component.html',
  styleUrls: ['./authors-item.component.scss']
})
export class AuthorsItemComponent implements OnInit {

  @Input() author!: Author

  constructor() { }

  ngOnInit(): void {
  }

}
