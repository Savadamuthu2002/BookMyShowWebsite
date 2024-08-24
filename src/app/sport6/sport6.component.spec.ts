import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport6Component } from './sport6.component';

describe('Sport6Component', () => {
  let component: Sport6Component;
  let fixture: ComponentFixture<Sport6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport6Component]
    });
    fixture = TestBed.createComponent(Sport6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
