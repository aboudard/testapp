import { Comment } from './Comment';
import { Post } from './Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  ROOT_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this.ROOT_URL}posts`);
  }

  getComments() {
    return this.http.get<Comment[]>(`${this.ROOT_URL}comments`);
  }

}
