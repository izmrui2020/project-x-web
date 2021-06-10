import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  sublists: any = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
