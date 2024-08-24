import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play8Component } from './play8.component';

describe('Play8Component', () => {
  let component: Play8Component;
  let fixture: ComponentFixture<Play8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Play8Component]
    });
    fixture = TestBed.createComponent(Play8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
