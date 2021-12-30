import { Component, OnInit } from '@angular/core';
import {AddAuthor} from "../../shared/models/addAuthor";
import {AuthorService} from "../author.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  author: AddAuthor = {
    fullName: '',
    birthday: '',
    imageUrl: ''
  };

  constructor(private authorService: AuthorService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.authorService.addAuthor(this.author).subscribe( () => {
      this.reset();
      this.toastr.success("ავტორი დამატებულია");
    })
  }

  reset() {
    this.author = {
      fullName: '',
      birthday: '',
      imageUrl: ''
    };
  }

}
