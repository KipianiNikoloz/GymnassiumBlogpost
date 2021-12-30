import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Author} from "../shared/models/author";
import {AuthorParams} from "../shared/models/authorParams";
import {AuthorService} from "./author.service";
import {AccountService} from "../login/account.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  @ViewChild("search") searchInput!: ElementRef;

  authors: Author[] = [];
  authorParams: AuthorParams = new AuthorParams();

  totalCount: number = 0;

  sortOptions: any[] = [
    { name: 'ანბანის მიხედვით', value: 'name' },
    { name: 'დაბადების თარიღი(ადრე)', value: 'dateAsc' },
    { name: 'დაბადების თარიღი(გვიან)', value: 'dateDesc' }
  ]

  constructor(private authorService: AuthorService, public accountService: AccountService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAuthors(this.authorParams).subscribe( value => {
      this.authors = value.data;
      this.totalCount = value.count;
      this.authorParams.pageSize = value.pageSize;
      this.authorParams.pageNumber = value.pageIndex;
    })
  }

  changeSort(event: any) {
    const element = event.currentTarget as HTMLInputElement
    this.authorParams.sort = element.value;
    this.getAuthors();
  }

  onPageChanged(event: any) {
    if(this.authorParams.pageNumber !== event) {
      this.authorParams.pageNumber = event;
      this.getAuthors();
    }
  }

  onSearch() {
    this.authorParams.search = this.searchInput.nativeElement.value;
    this.authorParams.pageNumber = 1;
    this.getAuthors();
  }

  onReset() {
    this.searchInput.nativeElement.value = '';
    this.authorParams = new AuthorParams();
    this.getAuthors();
  }

  onDelete() {
    this.getAuthors();
  }

}
