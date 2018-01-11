import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Post } from './Post';

@Injectable()
export class TotoService {
  ROOT_URL = 'http://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  getToto(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.ROOT_URL}posts`);
  }
}
