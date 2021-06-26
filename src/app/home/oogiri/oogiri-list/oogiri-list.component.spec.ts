import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OogiriListComponent } from './oogiri-list.component';

describe('OogiriListComponent', () => {
  let component: OogiriListComponent;
  let fixture: ComponentFixture<OogiriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OogiriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OogiriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
