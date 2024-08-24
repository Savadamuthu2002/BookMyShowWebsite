import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream8Component } from './stream8.component';

describe('Stream8Component', () => {
  let component: Stream8Component;
  let fixture: ComponentFixture<Stream8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream8Component]
    });
    fixture = TestBed.createComponent(Stream8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
