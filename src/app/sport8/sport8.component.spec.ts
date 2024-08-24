import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport8Component } from './sport8.component';

describe('Sport8Component', () => {
  let component: Sport8Component;
  let fixture: ComponentFixture<Sport8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport8Component]
    });
    fixture = TestBed.createComponent(Sport8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
