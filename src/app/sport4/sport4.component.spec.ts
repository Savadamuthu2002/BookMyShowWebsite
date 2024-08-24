import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport4Component } from './sport4.component';

describe('Sport4Component', () => {
  let component: Sport4Component;
  let fixture: ComponentFixture<Sport4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport4Component]
    });
    fixture = TestBed.createComponent(Sport4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
