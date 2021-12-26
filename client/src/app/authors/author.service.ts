import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {map} from "rxjs/operators";
import {Story} from "../shared/models/story";
import {AuthorParams} from "../shared/models/authorParams";
import {Author} from "../shared/models/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAuthors(authorParams: AuthorParams) {
    let params = new HttpParams();

    params = params.append('sort', authorParams.sort);

    params = params.append('pageIndex', authorParams.pageNumber);
    params = params.append('pageSize', authorParams.pageSize);

    if(authorParams.search) params = params.append('search', authorParams.search);

    return this.http.get<Pagination<Author>>(`${this.baseUrl}author`, { observe: 'response', params: params} )
      .pipe(
        map( source => {
          return source.body as Pagination<Author>;
        })
      );
  }

  getAuthorsWithStories(authorParams: AuthorParams) {
    let params = new HttpParams();

    params = params.append('sort', authorParams.sort);

    params = params.append('pageIndex', authorParams.pageNumber);
    params = params.append('pageSize', authorParams.pageSize);

    if(authorParams.search) params = params.append('search', authorParams.search);

    return this.http.get<Pagination<Author>>(`${this.baseUrl}author/included`, { observe: 'response', params: params} )
      .pipe(
        map( source => {
          return source.body as Pagination<Author>;
        })
      );
  }

  getAuthor(id: number) {
    return this.http.get<Author>(`${this.baseUrl}author/${id}`);
  }

  getAuthorWithStories(id: number) {
    return this.http.get<Author>(`${this.baseUrl}author/included/${id}`);
  }
}
