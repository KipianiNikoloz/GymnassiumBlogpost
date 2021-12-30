import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {StoryParams} from "../shared/models/storyParams";
import {Pagination} from "../shared/models/pagination";
import {map} from "rxjs/operators";
import {Story} from "../shared/models/story";
import {AddStory} from "../shared/models/addStory";

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStories(storyParams: StoryParams) {
    let params = new HttpParams();

    params = params.append('sort', storyParams.sort);

    params = params.append('pageIndex', storyParams.pageNumber);
    params = params.append('pageSize', storyParams.pageSize);

    if(storyParams.search) params = params.append('search', storyParams.search);

    return this.http.get<Pagination<Story>>(`${this.baseUrl}story`, { observe: 'response', params: params} )
      .pipe(
        map( source => {
          return source.body as Pagination<Story>;
        })
      );
  }

  getStory(id: number) {
    return this.http.get<Story>(`${this.baseUrl}story/${id}`);
  }

  addStory(storyDto: AddStory) {
    return this.http.post(`${this.baseUrl}story/`, storyDto);
  }

  updateStory(storyDto: AddStory, name: string) {
    let params = new HttpParams();

    if(name) params = params.append('name', name);

    return this.http.put(`${this.baseUrl}story/`, storyDto, { observe: "response", params: params});
  }

  deleteStory(name: string) {
    return this.http.delete(`${this.baseUrl}story/${name}`);
  }
}
