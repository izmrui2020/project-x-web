import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OogiriDetailComponent } from './oogiri-detail.component';

describe('OogiriDetailComponent', () => {
  let component: OogiriDetailComponent;
  let fixture: ComponentFixture<OogiriDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OogiriDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OogiriDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
