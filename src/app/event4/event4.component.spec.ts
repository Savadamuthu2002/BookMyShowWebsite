import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event4Component } from './event4.component';

describe('Event4Component', () => {
  let component: Event4Component;
  let fixture: ComponentFixture<Event4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Event4Component]
    });
    fixture = TestBed.createComponent(Event4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
