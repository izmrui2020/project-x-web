import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OogiriEditComponent } from './oogiri-edit.component';

describe('OogiriEditComponent', () => {
  let component: OogiriEditComponent;
  let fixture: ComponentFixture<OogiriEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OogiriEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OogiriEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
