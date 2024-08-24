import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream3Component } from './stream3.component';

describe('Stream3Component', () => {
  let component: Stream3Component;
  let fixture: ComponentFixture<Stream3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream3Component]
    });
    fixture = TestBed.createComponent(Stream3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
