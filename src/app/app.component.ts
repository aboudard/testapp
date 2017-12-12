import { Comment } from './Comment';
import { Post } from './Post';
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: Post[];
  comments: Comment[];
  selectedPost: Post;
  selectedComment: Comment;

  constructor(private dataService: DataService) {}

  getPosts(): void {
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  getOthers(): void {
    this.dataService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

}
