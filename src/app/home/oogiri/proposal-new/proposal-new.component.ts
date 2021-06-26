import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.scss']
})
export class ProposalNewComponent implements OnInit {

  proposal = new Proposal;

  constructor() { }

  ngOnInit(): void {
  }

}
