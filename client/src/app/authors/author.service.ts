import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {map} from "rxjs/operators";
import {Story} from "../shared/models/story";
import {AuthorParams} from "../shared/models/authorParams";
import {Author} from "../shared/models/author";
import {AddAuthor} from "../shared/models/addAuthor";

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

  getAuthorWithName(name: string) {
    return this.http.get<Author>(`${this.baseUrl}author/get-by-name/${name}`);
  }

  addAuthor(authorDto: AddAuthor) {
    return this.http.post(`${this.baseUrl}author`, authorDto);
  }

  updateAuthor(authorDto: AddAuthor, name: string) {
    let params = new HttpParams();

    if(name) params = params.append('name', name);

    return this.http.put(`${this.baseUrl}author`, authorDto, { observe: 'response', params: params});
  }

  deleteAuthor(name: string) {
    return this.http.delete(`${this.baseUrl}author/${name}`);
  }
}
