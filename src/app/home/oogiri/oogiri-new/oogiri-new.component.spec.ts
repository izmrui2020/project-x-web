import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OogiriNewComponent } from './oogiri-new.component';

describe('OogiriNewConponent', () => {
  let component:OogiriNewComponent ;
  let fixture: ComponentFixture<OogiriNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OogiriNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OogiriNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
