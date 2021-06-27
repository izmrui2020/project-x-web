import { Component, OnInit } from '@angular/core';
import { Oogiri } from '../oogiri';

@Component({
  selector: 'app-oogiri-list',
  templateUrl: './oogiri-list.component.html',
  styleUrls: ['./oogiri-list.component.scss']
})
export class OogiriListComponent implements OnInit {

  oogiries: Oogiri[] = [
		{
      id: 1,
			title: "My First Doc",
			description: 'asdfasdfasdf asdfasd',
      oogiri: "aaaaa",
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://google.com',
		},
		{
      id: 2,
			title: "My Second Doc",
			description: 'asdfasdfasdf asdfasd',
      oogiri: "bbbb",
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://google.com',
		},
		{
      id: 3,
			title: "My Last Doc",
			description: 'asdfasdfasdf asdfasd',
      oogiri: "ccccc",
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://google.com',
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
