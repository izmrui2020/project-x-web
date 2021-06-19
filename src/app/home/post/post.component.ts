import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Router } from '@angular/router';

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
    private ps: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    let timer = interval(1000);
    timer.subscribe(() => this.getPost());
  }

  getPost() {
    this.ps.getPosts()
      .subscribe(posts => this.posts = posts );
  }

  goToShow(post: Post): void {
    let postLink = ['/posts', post.id];
    this.router.navigate(postLink);
  }

}
