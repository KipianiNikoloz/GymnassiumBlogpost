import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../shared/models/author";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-authors-detail',
  templateUrl: './authors-detail.component.html',
  styleUrls: ['./authors-detail.component.scss']
})
export class AuthorsDetailComponent implements OnInit {

  author!: Author;

  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor() {
    this.authorService.getAuthorWithStories(+(this.route.snapshot.paramMap.get("id") as string)).subscribe( value => {
      this.author = value;
    })
  }

}
