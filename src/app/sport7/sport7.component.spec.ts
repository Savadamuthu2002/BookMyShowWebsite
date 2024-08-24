import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport7Component } from './sport7.component';

describe('Sport7Component', () => {
  let component: Sport7Component;
  let fixture: ComponentFixture<Sport7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport7Component]
    });
    fixture = TestBed.createComponent(Sport7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
