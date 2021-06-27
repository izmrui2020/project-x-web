import { TestBed } from '@angular/core/testing';

import { OogiriService } from './oogiri.service';

describe('OogiriService', () => {
  let service: OogiriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OogiriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
