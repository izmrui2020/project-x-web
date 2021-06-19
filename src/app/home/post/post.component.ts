import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Post } from './post';
import { PostService } from '../../service/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(
    private ps: PostService
  ) { }

  ngOnInit() {
    let timer = interval(1000);
    timer.subscribe(() => this.getPost());
  }

  getPost() {
    this.ps.getPosts()
      .subscribe(posts => this.posts = posts );
  }



}
