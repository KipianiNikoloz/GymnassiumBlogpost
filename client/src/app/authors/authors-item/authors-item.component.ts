import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../../shared/models/author";
import {AccountService} from "../../login/account.service";
import {AuthorService} from "../author.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-authors-item',
  templateUrl: './authors-item.component.html',
  styleUrls: ['./authors-item.component.scss']
})
export class AuthorsItemComponent implements OnInit {

  @Input() author!: Author;
  @Output() authorDeleteEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(public accountService: AccountService, private authorService: AuthorService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.authorService.deleteAuthor(this.author.fullName).subscribe(() => {
      this.authorDeleteEmitter.emit();
      this.toastr.success("ავტორი წაიშალა!");
    })
  }

}
