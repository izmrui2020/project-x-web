import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"

import { Post } from '../../../service/class-dto/post-dto';
import { PostService } from '../../../service/post.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {

  id: number;
  routeId: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private postservice: PostService,
  ) { }

  @Input() post; Post
  ngOnInit() {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      })
    // let postRequest = this.route.params
    //   // .((params: Params) =>
    //     this.postservice.get_one_post(+params['id']));
    // postRequest.subscribe(
    //   response => this.postservice = response.json())
  }

}
