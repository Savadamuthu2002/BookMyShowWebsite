import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream5Component } from './stream5.component';

describe('Stream5Component', () => {
  let component: Stream5Component;
  let fixture: ComponentFixture<Stream5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream5Component]
    });
    fixture = TestBed.createComponent(Stream5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
