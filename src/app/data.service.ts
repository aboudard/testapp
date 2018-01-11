import { Comment } from './Comment';
import { Post } from './Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { TotoService } from './toto.service';


@Injectable()
export class DataService {

  ROOT_URL = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient, private totoService: TotoService) { }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.ROOT_URL}posts`);
  }

  getToto(): Observable<Post[]> {
    return this.totoService
    .getToto()
    .pipe(map(posts => {
        return posts.filter((element, index, tab) => {
          return element.title.length < 15;
        });
      }));
  }

  getComments() {
    return this.http.get<Comment[]>(`${this.ROOT_URL}comments`);
  }

}
