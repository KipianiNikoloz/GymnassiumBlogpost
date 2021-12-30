import { Component, OnInit } from '@angular/core';
import {AddAuthor} from "../../shared/models/addAuthor";
import {AuthorService} from "../author.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent implements OnInit {

  id!: number;
  baseFullName!: string;

  author: AddAuthor = {
    fullName: '',
    birthday: '',
    imageUrl: ''
  };

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.id = +(this.route.snapshot.paramMap.get("id") as string);

    this.authorService.getAuthor(this.id).subscribe( value => {
      this.author.fullName = value.fullName;
      this.author.birthday = new Date(value.birthday).toISOString().split('T')[0];
      this.author.imageUrl = value.imageUrl;
      this.baseFullName = value.fullName;
    })
  }

  onSubmit() {
    this.authorService.updateAuthor(this.author, this.baseFullName).subscribe( () => {
      this.router.navigate(['/authors/' + this.id])
      this.toastr.success("ავტორი რედაქტირებულია");
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
