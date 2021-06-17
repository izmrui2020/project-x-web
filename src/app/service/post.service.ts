import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable,from, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { Post } from '../home/post/post';

@Injectable()
export class PostService {
  private postUrl = 'http://localhost:3000/posts'

  constructor(
    private http: HttpClient
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.postUrl)
      .pipe(map((response: Response[]) => <Post[]>response))
  }
}
