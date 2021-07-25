import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionErrorComponent } from './exception-error.component';

describe('ExceptionErrorComponent', () => {
  let component: ExceptionErrorComponent;
  let fixture: ComponentFixture<ExceptionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
